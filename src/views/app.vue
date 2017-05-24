<template>
  <div class="page" v-tabbar="{'menus': menus, menuColor: '#B5B5B5', activeMenuColor: '#44CC00', onMenuClick: menuClicked}">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menus: [
	        {
	          	iconOn: 'ion-ios-list',
	            iconOff: 'ion-ios-list-outline',
	            text: '订单管理',
	            path: '/orders'
	        },
	        {	
	          	iconOn: 'ion-ios-paper',
	            iconOff: 'ion-ios-paper-outline',
	            text: '餐单管理',
	            path: '/foods'
	        },
	        {
	        	iconOn: 'ion-ios-gear',
	            iconOff: 'ion-ios-gear-outline',
	            text: '设置',
	            path: '/setting'
	        }
        ]
      }
    },

    methods: {
      menuClicked(menuIndex) {
        console.log(menuIndex)
      }
    },

    beforeDestroy() {
      $tabbar.$emit('hideTabbar')
    }
  }
</script>