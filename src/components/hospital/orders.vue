<template>
  <div class="page has-navbar" v-nav="{title: '设置膳食菜谱'}">
    <div class="page-content">
      <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabs: [
          "周一",
          "周二",
          "周三",
          "周四",
          "周五",
          "周六",
          "周日"
        ],
        tabIndex: 0
      }
    },
    methods: {
      onTabClick(index) {
        this.tabIndex = index
      }
    }
  }
</script>