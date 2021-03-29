<template>

  <div>
    <div @click="openNewTab" style="cursor: pointer">Introduction to the I-Nema Program</div>
    <hr/>
    <div class="st">
      <div class="list-item">
        <div class="name">Maturity-Index:</div>
        <div>{{spObjectPool.length ? (total_cp/spObjectPool.length).toFixed(3) : 0.000}}</div>
      </div>
      <div class="list-item">
        <div class="name">PPI-values:</div>
         <div>{{spObjectPool.length ? (total_ppi/spObjectPool.length).toFixed(3) : 0.000}}</div>
      </div>
      <div class="line"></div>
      <div  class="title">Identification Result Numbers: </div>
      <div class="list-item" v-for="(count, specie_name) of nameCount" :key="specie_name">
        <div class="name" style='font-style:italic;font-weight:normal'>{{specie_name}}<span style="font-style: normal">sp</span>: </div>
        <div>{{count}}</div>
      </div>
      <div class="line"></div>
      <div class="title">Total Feeding Type Count:</div>
      <div class="list-item" v-for="(count, specie_feedingType) of feedingTypeCount" :key=" specie_feedingType">
        <div class="name" style='font-style:normal;font-weight:normal'>{{  specie_feedingType }}</div>
        <div>{{count}}</div>
      </div>
    </div>
    <div class="gallery">
      <div class="picture" v-for="(item, index) in imageList" :key="index">
        <el-image style="width; 146px; height: 146px; margin-right; 20px" :src="item.url"></el-image>
        <div>name: {{item.name}}</div>
        <div>feedingType: {{items.feeding_type}}</div>
        <div>cp: {{item.cp}}</div>
        <div>ppi: {{item.ppi}}</div>
      </div>
      <el-upload
      v-loading="showLoading"
      :action="uploadAPI"
      :multiple="true"
      :auto-upload="false"
      :show-file-list="false"
      list-type="picture-card"
      :on-change="getPicture"
      :on-success="on_progress"
      >
      <div>upload_and_submit</div><!-- 改名字-->
      <!--  asdasda -->
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      uploadAPI: 'http://127.0.0.1:5000/upload', // 等域名来了再改
      showLoading: false,
      spObjectPool: [],
      nameCount: {},
      feedingTypeCount: {},
      total_cp: 0,
      total_ppi: 0,
      imageList: []
    };
  },
  methods: {
    mapNameIntoObj(name) {
      const sl = {
        'Acrobeles': { cp: 2, ppi: 0, feeding_type: 'Bacteria' },
        'Acrobeloides': { cp: 2, ppi: 0, feeding_type: 'Bacteria' },
        'Amplimerlinius':	{ cp: 0, ppi: 3, feeding_type: 'Plant' },
        'Aphelenchoides':	{ cp: 2, ppi: 0, feeding_type: 'Fungi' },
        'Aporcelaimus':	{ cp: 5, ppi: 0, feeding_type: 'Predator' },
        'Axonchium': { cp: 5, ppi: 0, feeding_type: 'Omnivore' },
        'Discolimus': { cp: 5, ppi: 0, feeding_type: 'Omnivore' },
        'Ditylenchus': { cp: 2, ppi: 2, feeding_type: 'Fungi' },
        'Dorylaimus': { cp: 4, ppi: 0, feeding_type: 'Omnivore' },
        'Eudorylaimus': { cp: 4, ppi: 0, feeding_type: 'Omnivore' },
        'Helicotylenchus': { cp: 0, ppi: 3, feeding_type: 'Plant' },
        'Mesodorylaimus': { cp: 4, ppi: 0, feeding_type: 'Omnivore' },
        'Miconchus': { cp: 4, ppi: 0, feeding_type: 'Predator' },
        'Mylonchulus': { cp: 4, ppi: 0, feeding_type: 'Predator' },
        'Panagrolaimus': { cp: 1, ppi: 0, feeding_type: 'Bacteria' },
        'Pratylenchus': { cp: 0, ppi: 3, feeding_type: 'Plant' },
        'Pristionchus': { cp: 1, ppi: 0, feeding_type: 'Bacteria' },
        'Rhbiditis': { cp: 1, ppi: 0, feeding_type: 'Bacteria' },
        'Xenocriconema': { cp: 0, ppi: 3, feeding_type: 'Plant' }
      };
      return {
        name,
        feedingType: sl[name].feeding_type,
        cp: sl[name].cp,
        ppi: sl[name].ppi
      };
    },
    on_progress(event, file) {
      console.log(event, file);
      const { data } = event;
      console.log(event, data, this.spObjectPool);
      const specieObj = this.mapNameIntoObj(data);
      // keep a copy of all species identified
      this.spObjectPool.push(specieObj);

      // 查找返回图片信息在imageList中的index
      const image = this.imageList.find(item => item.file.url === file.url);
      if (image) {
        // 将返回结果已添加到image的result属性中
        image.result = specieObj;
      }
      this.nameCount[specieObj.name] = this.nameCount[specieObj.name] ? this.nameCount[specieObj.name] + 1 : 1;
      this.feedingTypeCount[specieObj.feedingType] = this.feedingTypeCount[specieObj.feedingType] ? this.feedingTypeCount[specieObj.feedingType] + 1 : 1;
      this.total_cp += specieObj.cp;
      this.total_ppi += specieObj.ppi;
    },
    openNewTab() {
      window.open('./q.html', '_blank');
    },
    // 获取图片上传结果，然后渲染出来
    getPicture(file) {
      this.imageList.push({ file });
      console.log(this.imageList);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.st {
  width:70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list-item{
  display: flex;
  justify-content: flex-start;
}

.line{
  margin: 20px 0;
  width: 100%;
  height: 1px;
  background-color: #000;
}

.name{
  margin-left: 50px;
  margin-right: 80px;
  width: 100px;
  font-weight:bold;
  text-align: right;
}

.title{
  text-align: left;
  font-weight:bold;
}
.st span{
  margin-left: 10px;
  text-align: left;
}

.gallery{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px auto;
  width: 70%;
}
.picture{
  width: 146px;
  height: auto;
}
</style>
