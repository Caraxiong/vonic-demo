import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import App from './views/app.vue'
import Foods from './views/hospital/foods.vue'
import Orders from './views/hospital/orders.vue'
import Setting from './views/hospital/setting.vue'
import Food from './views/patient/food.vue'
import Order from './views/patient/order.vue'
import Myorder from './views/patient/myorder.vue'

// Routes
const routes = [
	{ 
		path: '/', 
		component: App,
		children: [
			{ path: '/foods', component: Foods },
			{ path: '/orders', component: Orders },
			{ path: '/setting', component: Setting }
		]
	},
	{ path: '/food', component: Food },
	{ path: '/order', component: Order },
	{ path: '/myorder', component: Myorder }
]

Vue.use(Vonic.app, {
  routes: routes
})
