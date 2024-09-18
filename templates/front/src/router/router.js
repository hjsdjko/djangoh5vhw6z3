import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import shentijiankangList from '../pages/shentijiankang/list'
import shentijiankangDetail from '../pages/shentijiankang/detail'
import shentijiankangAdd from '../pages/shentijiankang/add'
import gonggongshujiList from '../pages/gonggongshuji/list'
import gonggongshujiDetail from '../pages/gonggongshuji/detail'
import gonggongshujiAdd from '../pages/gonggongshuji/add'
import jieyuexinxiList from '../pages/jieyuexinxi/list'
import jieyuexinxiDetail from '../pages/jieyuexinxi/detail'
import jieyuexinxiAdd from '../pages/jieyuexinxi/add'
import guihaixinxiList from '../pages/guihaixinxi/list'
import guihaixinxiDetail from '../pages/guihaixinxi/detail'
import guihaixinxiAdd from '../pages/guihaixinxi/add'
import haishurukuList from '../pages/haishuruku/list'
import haishurukuDetail from '../pages/haishuruku/detail'
import haishurukuAdd from '../pages/haishuruku/add'
import tushufenleiList from '../pages/tushufenlei/list'
import tushufenleiDetail from '../pages/tushufenlei/detail'
import tushufenleiAdd from '../pages/tushufenlei/add'
import huodongxinxiList from '../pages/huodongxinxi/list'
import huodongxinxiDetail from '../pages/huodongxinxi/detail'
import huodongxinxiAdd from '../pages/huodongxinxi/add'
import huodongbaomingList from '../pages/huodongbaoming/list'
import huodongbaomingDetail from '../pages/huodongbaoming/detail'
import huodongbaomingAdd from '../pages/huodongbaoming/add'
import huodongfenleiList from '../pages/huodongfenlei/list'
import huodongfenleiDetail from '../pages/huodongfenlei/detail'
import huodongfenleiAdd from '../pages/huodongfenlei/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import friendlinkList from '../pages/friendlink/list'
import friendlinkDetail from '../pages/friendlink/detail'
import friendlinkAdd from '../pages/friendlink/add'
import discussgonggongshujiList from '../pages/discussgonggongshuji/list'
import discussgonggongshujiDetail from '../pages/discussgonggongshuji/detail'
import discussgonggongshujiAdd from '../pages/discussgonggongshuji/add'
import discussnewsList from '../pages/discussnews/list'
import discussnewsDetail from '../pages/discussnews/detail'
import discussnewsAdd from '../pages/discussnews/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'shentijiankang',
					component: shentijiankangList
				},
				{
					path: 'shentijiankangDetail',
					component: shentijiankangDetail
				},
				{
					path: 'shentijiankangAdd',
					component: shentijiankangAdd
				},
				{
					path: 'gonggongshuji',
					component: gonggongshujiList
				},
				{
					path: 'gonggongshujiDetail',
					component: gonggongshujiDetail
				},
				{
					path: 'gonggongshujiAdd',
					component: gonggongshujiAdd
				},
				{
					path: 'jieyuexinxi',
					component: jieyuexinxiList
				},
				{
					path: 'jieyuexinxiDetail',
					component: jieyuexinxiDetail
				},
				{
					path: 'jieyuexinxiAdd',
					component: jieyuexinxiAdd
				},
				{
					path: 'guihaixinxi',
					component: guihaixinxiList
				},
				{
					path: 'guihaixinxiDetail',
					component: guihaixinxiDetail
				},
				{
					path: 'guihaixinxiAdd',
					component: guihaixinxiAdd
				},
				{
					path: 'haishuruku',
					component: haishurukuList
				},
				{
					path: 'haishurukuDetail',
					component: haishurukuDetail
				},
				{
					path: 'haishurukuAdd',
					component: haishurukuAdd
				},
				{
					path: 'tushufenlei',
					component: tushufenleiList
				},
				{
					path: 'tushufenleiDetail',
					component: tushufenleiDetail
				},
				{
					path: 'tushufenleiAdd',
					component: tushufenleiAdd
				},
				{
					path: 'huodongxinxi',
					component: huodongxinxiList
				},
				{
					path: 'huodongxinxiDetail',
					component: huodongxinxiDetail
				},
				{
					path: 'huodongxinxiAdd',
					component: huodongxinxiAdd
				},
				{
					path: 'huodongbaoming',
					component: huodongbaomingList
				},
				{
					path: 'huodongbaomingDetail',
					component: huodongbaomingDetail
				},
				{
					path: 'huodongbaomingAdd',
					component: huodongbaomingAdd
				},
				{
					path: 'huodongfenlei',
					component: huodongfenleiList
				},
				{
					path: 'huodongfenleiDetail',
					component: huodongfenleiDetail
				},
				{
					path: 'huodongfenleiAdd',
					component: huodongfenleiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'friendlink',
					component: friendlinkList
				},
				{
					path: 'friendlinkDetail',
					component: friendlinkDetail
				},
				{
					path: 'friendlinkAdd',
					component: friendlinkAdd
				},
				{
					path: 'discussgonggongshuji',
					component: discussgonggongshujiList
				},
				{
					path: 'discussgonggongshujiDetail',
					component: discussgonggongshujiDetail
				},
				{
					path: 'discussgonggongshujiAdd',
					component: discussgonggongshujiAdd
				},
				{
					path: 'discussnews',
					component: discussnewsList
				},
				{
					path: 'discussnewsDetail',
					component: discussnewsDetail
				},
				{
					path: 'discussnewsAdd',
					component: discussnewsAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
