<template>
  <div class="page has-navbar" v-nav="{title: '订单管理'}">
    <div class="page-content">
      <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick" style="height:50px;"></tabs>
      <div class="inner-tabs">
         <tabs :tab-items="foodTabs" :tab-index="foodTabIndex" :on-tab-click="onFoodTabClick" style="height:50px;"></tabs>
         <div>
           
         </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabs: [
          "前一天",
          "今天",
          "后一天"
        ],
        foodTabs: [
          "早餐",
          "中餐",
          "晚餐"
        ],
        tabIndex: 0,
        foodTabIndex: 0
      }
    },
    methods: {
      onTabClick(index) {
        this.tabIndex = index
      },

      onFoodTabClick(index) {
        this.foodTabIndex = index
      }
    }
  }
</script>