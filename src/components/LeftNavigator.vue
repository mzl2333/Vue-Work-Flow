<template>
  <el-menu default-active="/" router>
    <el-menu-item index="/">简历搜索</el-menu-item>
    <el-menu-item index="Upload">简历上传</el-menu-item>
    <el-submenu index="">
      <template slot="title"><i class="el-icon-setting"></i>用户管理</template>
      <el-menu-item index="">账号管理</el-menu-item>
      <el-menu-item index="">角色管理</el-menu-item>
      <el-menu-item index="">权限管理</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  import Router from './../router';
  export default {
    name: 'LeftNavigator',
    componentName: 'LeftNavigator',
    created () {
      this.testGetData();
    },
    data () {
      return {
        lists: []
      }
    },
    methods: {
        testGetData: function () {
          let v = this;
          v.$api.get('static/mock/navigator.json', {}, function (r) {
              console.log(r);
          }, null);
        }
    }
  }
</script>
