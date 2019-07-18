//配置路由
import VueRouter from 'vue-router'

//每新建一个vue文件都要配置路由
import home from '../components/index/home.vue'
import detail from '../components/index/detail.vue'
import my from '../components/index/my.vue'
import login from '../components/index/login.vue'
import register from '../components/index/register.vue'
import resoldHouse from '../components/index/resoldHouse.vue'
import newHouse from '../components/index/newHouse.vue'
import rentHouse from '../components/index/rentHouse.vue'
import assess from '../components/index/assess.vue'
import pay from '../components/index/pay.vue'
import plot from '../components/index/plot.vue'
import commercial from '../components/index/commercial.vue'
import cyclopedia from '../components/index/cyclopedia.vue'


//每个js都是单独的文件，必须要输出
export default new VueRouter({
	routes:[
	{
		path:'/',component:home
	},
	{
		path:'/my',component:my
	},
	{
		path:'/login',component:login
	},
	{
		path:'/register',component:register
	},
	{
		path:'/resoldHouse',component:resoldHouse
	},
	{
		path:'/detail',component:detail
	},
	{
		path:'/newHouse',component:newHouse
	},
	{
		path:'/rentHouse',component:rentHouse
	},
	{
		path:'/assess',component:assess
	},
	{
		path:'/pay',component:pay
	},
	{
		path:'/plot',component:plot
	},
	{
		path:'/commercial',component:commercial
	},
	{
		path:'/cyclopedia',component:cyclopedia
	}
	]
})
