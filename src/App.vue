<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <el-row>
          <el-col :span="12">Logo</el-col>
          <el-col :span="12">menu</el-col>
        </el-row>
      </div>
    </div>
    <div class="main-body">
      <div class="container">
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
  </div>
</template>

<script>
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
  }
  .header {
    height: 80px;
    background-color: #20A0FF;
  }
  .container {
    width: 1140px;
    padding: 0 30px;
    margin: 0 auto;
    .el-row {
      margin-left: -30px;
    }
  }
</style>
