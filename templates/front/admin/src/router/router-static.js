import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import huodongfenlei from '@/views/modules/huodongfenlei/list'
    import huodongxinxi from '@/views/modules/huodongxinxi/list'
    import gonggongshuji from '@/views/modules/gonggongshuji/list'
    import friendlink from '@/views/modules/friendlink/list'
    import shentijiankang from '@/views/modules/shentijiankang/list'
    import guihaixinxi from '@/views/modules/guihaixinxi/list'
    import tushufenlei from '@/views/modules/tushufenlei/list'
    import systemintro from '@/views/modules/systemintro/list'
    import jieyuexinxi from '@/views/modules/jieyuexinxi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import discussnews from '@/views/modules/discussnews/list'
    import haishuruku from '@/views/modules/haishuruku/list'
    import discussgonggongshuji from '@/views/modules/discussgonggongshuji/list'
    import config from '@/views/modules/config/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '网站公告',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/huodongfenlei',
        name: '活动分类',
        component: huodongfenlei
      }
      ,{
	path: '/huodongxinxi',
        name: '活动信息',
        component: huodongxinxi
      }
      ,{
	path: '/gonggongshuji',
        name: '公共书籍',
        component: gonggongshuji
      }
      ,{
	path: '/friendlink',
        name: '友情链接',
        component: friendlink
      }
      ,{
	path: '/shentijiankang',
        name: '身体健康',
        component: shentijiankang
      }
      ,{
	path: '/guihaixinxi',
        name: '归还信息',
        component: guihaixinxi
      }
      ,{
	path: '/tushufenlei',
        name: '图书分类',
        component: tushufenlei
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/jieyuexinxi',
        name: '借阅信息',
        component: jieyuexinxi
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
      ,{
	path: '/discussnews',
        name: '网站公告',
        component: discussnews
      }
      ,{
	path: '/haishuruku',
        name: '还书入库',
        component: haishuruku
      }
      ,{
	path: '/discussgonggongshuji',
        name: '公共书籍评论',
        component: discussgonggongshuji
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/newstype',
        name: '网站公告分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
