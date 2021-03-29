/* eslint-disable no-return-assign */
/*
 * @Author: your name
 * @Date: 2021-02-04 11:12:38
 * @LastEditTime: 2021-02-04 18:49:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /git-test/src/components/chart.js
 */
import { Chart, registerShape } from '@antv/g2';
//
registerShape('interval', 'image', {
  draw(cfg, group) {
    const image = require('../assets/big-ring.png');
    const ring = group.addShape('image', {
      attrs: {
        x: 0,
        y: 0,
        width: 200,
        height: 200,
        img: image
      }
    });
    let ang = 10;
    setInterval(() => {
      const angle = bounceOut(ang / 360);
      ang = (ang + angle * 360) % 360;
      ring.rotateAtPoint(100, 100, ang);
    }, 500);
    function bounceOut(x) {
      var n1 = 7.5625;
      var d1 = 2.75;
      if (x < 1 / d1) {
        return n1 * x * x;
      } else if (x < 2 / d1) {
        // eslint-disable-next-line no-return-assign
        return n1 * (x -= (1.5 / d1)) * x + 0.75;
      } else if (x < 2.5 / d1) {
        return n1 * (x -= (2.25 / d1)) * x + 0.9375;
      } else {
        return n1 * (x -= (2.625 / d1)) * x + 0.984375;
      }
    }
    return group;
  }
});

export const circleChart = (option) => {
  const { container, height, data, type, color, rate, isActive = false, fontSize = 28 } = option;
  const count = 0;
  const chart = new Chart({
    container,
    height: height || 200,
    autoFit: true
  });
  chart.data(data);
  chart.legend(false);
  chart.tooltip(false);
  chart.coordinate('theta', {
    radius: 0.7,
    innerRadius: 0.87
  });
  // 如果总值为0, 加环形图
  const total = data.reduce((a, b) => a + b.count, 0);
  if (total) {
    const dv = chart.createView({
      region: {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 }
      }
    });
    dv.data([
      { type: 1, count: 1 },
      { type: 2, count: 1 }
    ]);
    dv.coordinate('theta', {
      radius: 1,
      innerRadius: 0.87
    });
    dv
      .interval()
      .adjust('stack')
      .position(type)
      .shape('image');
  }
  const interval = chart.interval()
    .adjust('stack')
    .position(type)
    .color('type', color)
    .shape('circle')
    .animate({
      appear: {
        animation: 'wave-in',
        easing: 'easeLinear',
        duration: 2000
      }
    });
  chart.annotation().text({
    position: ['50%', '52%'],
    content: data[0].percent,
    animate: true,
    style: {
      stroke: 'transparent',
      fill: '#fff',
      textAlign: 'center',
      fontWeight: 600,
      fontSize: fontSize
    }
  });
  turnOnAnnotation(chart, interval, data, count);
  chart.render();
  interval.elements[0].setState('active', true);
  return { chart, interval };
};

const turnOnAnnotation = (chart, interval, data, count) => {
  setTimeout(() => {
    count = (++count) % data.length;
    chart.annotation().clear(true);
    chart.annotation().text({
      position: ['50%', '52%'],
      content: data[count].percent,
      animate: true,
      style: {
        stroke: 'transparent',
        fill: '#fff',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 28
      }
    });
    interval.elements.forEach((item, index) => {
      item.setState('active', count === index);
    });
    chart.render(true);
    turnOnAnnotation(chart, interval, data, count);
  }, 2000);
};
