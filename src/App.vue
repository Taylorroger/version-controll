<!--
 * @Author: your name
 * @Date: 2021-01-13 15:34:31
 * @LastEditTime: 2021-02-04 11:14:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /git-test/src/App.vue
-->
<template>
  <div id="app">
    <CircleChart/>
  </div>
</template>

<script>
import CircleChart from './components/CircleChart.vue';

export default {
  name: 'App',
  components: {
    CircleChart
  }
};
</script>

<style>
#app {
  font-family: YouSheBiaoTiHei, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
