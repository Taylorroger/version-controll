<template>
  <div class="hello" ref="chart"></div>
</template>

<script>
import { Chart, registerShape } from '@antv/g2';
let charts = null;
const data = [
  { type: '数据1', count: 10, expected: 1 },
  { type: '数据2', count: 12, expected: 1 },
  { type: '数据3', count: 16, expected: 1 },
  { type: '数据4', count: 19, expected: 1 },
  { type: '数据5', count: 11, expected: 1 },
  { type: '数据7', count: 8, expected: 1 }
];
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      list: [1, 2, 3],
      list2: { a: 1, b: 2, helloword: 1 }
    };
  },
  mounted() {
    registerShape('interval', 'right-radius', {
      draw(cfg, container) {
        const points = cfg.points;
        let path = [];
        path.push(['M', points[0].x, points[0].y]);
        path.push(['L', points[1].x, points[1].y]);
        path.push(['L', points[2].x, points[2].y]);
        path.push(['L', points[3].x, points[3].y]);
        path.push('Z');
        path = this.parsePath(path); // 将 0 - 1 转化为画布坐标
        const group = container.addGroup();
        const radius = (path[1][2] - path[2][2]) / 2;
        group.addShape('rect', {
          attrs: {
            x: path[0][1], // 矩形起始点为左上角
            y: path[2][2],
            width: path[1][1] - path[0][1],
            height: path[1][2] - path[2][2],
            fill: cfg.color,
            radius: [0, radius, radius, 0]
          }
        });
        return group;
      }
    });

    registerShape('interval', 'bar-point', {
      draw(cfg, container) {
        const points = cfg.points;
        let path = [];
        path.push(['M', points[0].x, points[0].y]);
        path.push(['L', points[1].x, points[1].y]);
        path.push(['L', points[2].x, points[2].y]);
        path.push(['L', points[3].x, points[3].y]);
        path.push('Z');
        path = this.parsePath(path); // 将 0 - 1 转化为画布坐标
        const group = container.addGroup();
        let color = 'rgba(0, 234, 255, 1)';
        if (cfg.data.count === 60) {
          color = 'rgba(204, 75, 104, 1)';
        }
        if (cfg.data.count > -1) {
          group.addShape('rect', {
            attrs: {
              x: path[0][1], // 矩形起始点为左上角
              y: path[2][2] - 10,
              width: 4,
              height: 4,
              fill: color
            }
          });
        }
        return group;
      }
    });

    charts = this.draw();
    setTimeout(() => {
      const newData = data.map((item, index) => {
        item.type = `数据${index + 8}`;
        item.count += 10;
        return item;
      });
      charts.getRootView().views.forEach(item => {
        item.changeData(newData);
      });
      charts.changeData(newData);
    }, 2000);
  },
  methods: {
    hasA() {
      const a = 1;
      console.log('dhadha', a);
    },
    has() {
      const a = '12ewq';
      console.log(a);
    },
    draw() {
      // const { el, type, data, width, height, color, fontSize, size, showMax } = option;
      const count = data.map(item => item.count);
      const total = count.reduce((a, b) => a + b, 0);
      const max = Math.max(...count);
      const chart = new Chart({
        container: this.$refs['chart'],
        height: 200,
        autoFit: true
      });
      chart.data(data);

      chart.legend(false);
      chart.tooltip(false);
      chart.coordinate('rect').transpose();
      chart.axis('type', false);
      chart.axis('count', false);
      chart
        .interval()
        .position('type*count')
        .shape('bar-point')
        .size(4)
        // .label('type', {
        //   offsetX: '0',
        //   style: {
        //     fill: 'red',
        //     fontSize: 16
        //   }
        // });
        .label('type', (type) => {
          const renderData = chart.getData();
          const item = renderData.find(item => item.type === type);
          const distance = item.count / max * chart.getCanvas().cfg.width;
          return {
            content: type,
            offsetX: Number(`-${distance}`),
            offsetY: -14,
            style: {
              fill: 'red',
              fontFamily: 'YouSheBiaoTiHei'
            }
          };
        });
      // 蒙层
      const dv = chart.createView({
        region: {
          start: { x: 0, y: 0 },
          end: { x: 1, y: 1 }
        },
        padding: [0, 0]
      });
      dv.axis('type', false);
      dv.axis('expected', false);
      dv.data(data.map(item => {
        return {
          type: item.type,
          expected: item.expected
        };
      }));
      dv.tooltip(false);
      dv.interval()
        .position('type*expected')
        .shape('right-radius')
        .color('transparent')
        .size(4)
        .style({
          fill: '#fff',
          fillOpacity: 0.2
        })
        .label('type', (val) => {
          if (val.count < 0) {
            return null;
          }
          const renderData = chart.getData();
          const item = renderData.find(item => item.type === val);
          const rate = (item.count / total * 100).toFixed(1);
          const str = item.label || `${item.count}人` || `${item.count}人,占比${rate}%`;
          const color = item.count === max ? 'rgba(248, 101, 108, 1)' : 'rgba(0, 234, 255, 1)';
          return {
            content: str,
            offsetX: 10,
            offsetY: -13,
            style: {
              fontSize: 14,
              fill: color,
              fontFamily: 'Helvetica',
              textAlign: 'start'
            },
            animate: {
              appear: {
                animation: 'fade-in'
              },
              leave: {
                animation: 'fade-out'
              }
            }
          };
        });

      chart
        .interval()
        .adjust()
        .position('type*count')
        .color('type', ['red', 'green'])
        .shape('right-radius')
        .animate({
          enter: {
            animation: 'scale-in-x',
            duration: 800,
            delay: 1000
          },
          appear: {
            animation: 'scale-in-x',
            duration: 800,
            delay: 1000
          }
        })
        .size(4);
      chart.render();
      return chart;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 200px;
  height: 200px;
  position: relative;
  color: '#fff';
  background-color: rgba(0, 0, 0, 1);
  font-style: italic;
}
</style>
