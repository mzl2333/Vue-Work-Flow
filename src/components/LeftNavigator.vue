<template>
  <el-menu default-active="/" router>
    <el-menu-item v-for="item in lists" :key="item.id" :index="item.temp" v-if="item.sub.length === 0">
      <i :class="item.fa"></i>{{item.title}}
    </el-menu-item>
    <el-submenu v-for="item in lists" :key="item.id" v-if="item.sub.length != 0" index="">
      <template slot="title"><i class="el-icon-setting"></i>{{item.title}}</template>
      <el-menu-item v-for="sub in item.sub" :key="sub.id" :index="sub.temp">
        <i :class="sub.fa"></i>{{sub.title}}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  import Router from './../router';
  export default {
    name: 'LeftNavigator',
    componentName: 'LeftNavigator',
    created () {
      this.getNavData();
    },
    data () {
      return {
        lists: []
      }
    },
    methods: {
      getNavData: function () {
          let v = this;
          v.$api.get('static/mock/navigator.json', {}, function (r) {
              v.lists = r;
          }, null);
        }
    }
  }
</script>
<style lang="scss" scope>
  .el-menu-item {
    height: 50px!important;
    line-height: 50px!important;
  }
</style>
