<!--
 * @Author: your name
 * @Date: 2021-02-04 11:13:35
 * @LastEditTime: 2021-02-04 11:23:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /git-test/src/components/CircleChart.vue
-->
<template>
    <div class="chart" ref="chart"></div>
</template>
<script>
import { circleChart } from './chart';
export default {
  data() {
    return {};
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      const option = {
        width: 200,
        height: 200,
        type: 'count',
        data: [
          { type: '数据1', count: 20, percent: '33%' },
          { type: '数据2', count: 20, percent: '20%' },
          { type: '数据3', count: 20, percent: '10%' }
        ],
        color: ['red', 'green', 'yellow'],
        container: this.$refs['chart']
      };
      circleChart(option);
    }
  }
};
</script>
<style scoped>
.chart{
    width: 200px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
