<template>
  <div id="app">
    <div class="header">
        <el-row>
          <el-col :span="4">Logo</el-col>
          <el-col :span="20">menu</el-col>
        </el-row>
    </div>
    <div class="main-body">
        <el-row>
            <el-col :span="4">
              <LeftNavigator></LeftNavigator>
            </el-col>
            <el-col :span="20">
              <router-view></router-view>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
  import "babel-polyfill";
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import LeftNavigator from "@/components/LeftNavigator.vue";
  export default {
    components: {
      ElRow,
      ElCol,
      LeftNavigator},
    name: 'app'
  }
</script>

<style lang="scss" scope>
  @import "style/style.scss";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #D3DCE6;
    .header {
      position: fixed;
      z-index: 1010;
      top: 0;
      width: 100%;
      height: 80px;
      background-color: #20A0FF;
    }
    .main-body {
      margin-top: 80px;
    }
  }
</style>
