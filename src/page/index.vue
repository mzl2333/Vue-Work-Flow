<template>
  <div>
    <h1 class="logo">render list</h1>
    <ul class="list">
      <li v-for="item in lists" v-text="item.title"></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        lists: []
      }
    },
    created () {
      // 初始化组建数据
      this.getData()
    },
    methods: {
      getData: function () {
        let v = this
        v.$api.get('jd/list', {pageNum: 1, pageSize: 100}, function (data) {
          console.log(data)
        })
      }
    }
  }
</script>
