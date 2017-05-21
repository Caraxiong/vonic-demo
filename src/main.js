import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import App from './components/app.vue'
import Foods from './components/hospital/foods.vue'
import Orders from './components/hospital/orders.vue'
import Setting from './components/hospital/setting.vue'
import Food from './components/patient/food.vue'
import Order from './components/patient/order.vue'
import Myorder from './components/patient/myorder.vue'

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
