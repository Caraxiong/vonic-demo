<template>
  <div class="page has-navbar" v-nav="{title: '订单管理'}">
    <div class="page-content">
      <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>
      <div class="inner-tabs">
         <tabs :tab-items="foodTabs" :tab-index="foodTabIndex" :on-tab-click="onFoodTabClick"></tabs>
         <div class="tab-content">
           <table>
              <tr>
                <th>床号，姓名，住院号</th>
                <th>菜单</th>
                <th>类型</th>
                <th>金额</th>
                <th>操作</th>
              </tr>
              <tr>
                <td>1，张三，101</td>
                <td>肉，蔬菜</td>
                <td>主食</td>
                <td>10.00</td>
                <td><md-button class="button button-positive" @click.native="clicked()">退订</md-button></td>
             </tr>
           </table>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
  require('../../styles/common.scss');
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
        cells: [],
        tabIndex: 0,
        foodTabIndex: 0
      }
    },
    mounted:function() {
      this.$nextTick(function(){
      })
    },
    methods: {
      onTabClick(index) {
        this.tabIndex = index
      },

      onFoodTabClick(index) {
        this.foodTabIndex = index
      },

      clicked() {
        let options = {
          effect: 'scale',
          title: '标题文字',
          showClose: true,
          buttons: [
            {text: '确定'},
            {text: '取消'},
          ]
        }

        let popup = $popup.fromTemplate('<p style="margin-bottom: 0; text-align: center;">内容文字</p>', options)

        popup.show().then((buttonIndex) => {
          console.log(buttonIndex)
        })
      }
    }
  }
</script>