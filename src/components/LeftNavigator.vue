<template>
  <el-menu default-active="/" router unique-opened="true">
    <el-menu-item v-for="item in lists" :key="item.id" :index="item.temp" v-text="item.title"></el-menu-item>
    <!--<el-menu-item index="upload">简历上传</el-menu-item>-->
    <!--<el-submenu index="">-->
      <!--<template slot="title"><i class="el-icon-setting"></i>用户管理</template>-->
      <!--<el-menu-item index="">账号管理</el-menu-item>-->
      <!--<el-menu-item index="">角色管理</el-menu-item>-->
      <!--<el-menu-item index="">权限管理</el-menu-item>-->
    <!--</el-submenu>-->
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
              v.lists = r;
          }, null);
        }
    }
  }
</script>
