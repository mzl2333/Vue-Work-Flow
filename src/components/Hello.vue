<template>
  <div class="hello">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"><i class="el-icon-edit"></i></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">1</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">2</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">3</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">4</div>
      </el-col>
    </el-row>
    <el-button type="primary"></el-button>
  </div>
</template>

<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {ElButton},
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
</style>
