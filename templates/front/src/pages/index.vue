<template>
	<div class="main-containers">
		<div class="body-containers" :style='{"minHeight":"100vh","padding":"0","margin":"0","position":"relative","background":"#fafafa"}'>
		<div class="top-container" :style='{"boxShadow":"0 0px 0px rgba(64, 158, 255, .3)","padding":"24px 7% 0","borderColor":"#eee","alignItems":"center","color":"#999","textAlign":"right","display":"block","top":"0","left":"0","background":"url(http://codegen.caihongy.cn/20231006/a311120079464707a7e40ec56c90b62d.png) repeat-x center bottom,#f5f5f5","borderWidth":"0px","width":"100%","fontSize":"16px","position":"relative","borderStyle":"solid","height":"150px","zIndex":"1002"}'>
			<!-- info -->
			<div :style='{"float":"left","margin":"0 40px 0 0","display":"block"}'>
			  <span :style='{"padding":"0 0 0 12px","lineHeight":"44px","fontSize":"32px","color":"#012339","float":"left","fontWeight":"500"}'>基于Python Web的社区爱心养老管理系统设计与实现</span>
			</div>
			
			<div v-if="false" :style='{"margin":"0 10px","fontSize":"inherit","color":"inherit","display":"inline-block"}'></div>
			
			<img v-if="headportrait&&Token" :style='{"width":"36px","margin":"0px","borderRadius":"50%","height":"36px"}' :src="headportrait?baseUrl + headportrait:require('@/assets/avator.png')">
			<div v-if="Token" :style='{"padding":"0 10px","fontSize":"inherit","lineHeight":"24px","color":"inherit","display":"inline-block","height":"24px"}'>{{username}}</div>
			<div v-if="Token && notAdmin" :style='{"cursor":"pointer","padding":"0 12px","color":"inherit","display":"inline-block","fontSize":"inherit","lineHeight":"24px","height":"24px"}' @click="goMenu('/index/center')">个人中心</div>
			<el-button v-if="!Token" @click="toLogin()" :style='{"border":"0","padding":"0 40px","margin":"76px 0 0","color":"#f4f4f5","borderRadius":"0 0 4px 4px","background":"#1e3c4f","display":"inline-block","fontSize":"14px","lineHeight":"40px","position":"absolute","right":"calc(7% + 140px)","height":"40px"}'>登录/注册</el-button>
			<el-button v-if="Token" @click="logout" :style='{"border":"0px solid #666","padding":"0 40px","margin":"76px 0 0","color":"#fff","borderRadius":"0 0 4px 4px","background":"#1c6a6d","display":"inline-block","fontSize":"14px","lineHeight":"40px","position":"absolute","right":"7%","height":"40px"}'>退出</el-button>
		</div>


			<div class="menu-preview" :style='{"padding":"0","borderColor":"#efefef","margin":"0 auto","top":"150px","background":"none","borderWidth":"0 0 0px 0","width":"100%","position":"absolute","borderStyle":"solid","height":"auto","zIndex":"1002"}'>
			<el-scrollbar wrap-class="scrollbar-wrapper-horizontal">
				<el-menu class="el-menu-horizontal-demo" :style='{"border":"0","padding":"0px 40px","listStyle":"none","margin":"0 auto","alignItems":"flex-start","borderRadius":"0 0 30px 30px","background":"rgba(226,234,240,.98)","display":"flex","width":"86%","justifyContent":"space-between"}' :default-active="activeMenu" :unique-opened="true" mode="horizontal" :router="true" @select="handleSelect">
					<div class="userinfo" :style='{"width":"84px","padding":"6px 10px 0","display":"none","height":"auto"}'>
					  <el-image :style='{"width":"100%","objectFit":"cover","borderRadius":"20px","display":"block","height":"32px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" fit="cover"></el-image>
					  <div :style='{"fontSize":"12px","lineHeight":"1.5","color":"#333","textAlign":"center"}'>nickname</div>
					</div>
					<el-menu-item class="home" index="/index/home" @click.native="goMenu('/index/home')">
						<span :style='{"padding":"0 10px","margin":"0","color":"inherit","display":"none","width":"14px","lineHeight":"auto","fontSize":"16px","height":"auto"}' class="icon iconfont icon-shouye-zhihui"></span>
						<span :style='{"padding":"0 10px","lineHeight":"auto","fontSize":"16px","color":"inherit","height":"auto"}'>首页</span>
					</el-menu-item>
					<el-menu-item class="item" v-for="(menu, index) in menuList" :index="menu.url" :key="index" @click.native="goMenu(menu.url)">
						<i :style='{"padding":"0 10px","margin":"0","color":"inherit","display":"none","width":"16px","lineHeight":"auto","fontSize":"16px","height":"auto"}' :class="iconArr[index]"></i>
						<span :style='{"padding":"0 10px","lineHeight":"auto","fontSize":"16px","color":"inherit","height":"auto"}'>{{menu.name}}</span>
					</el-menu-item>
					<el-menu-item class="user" index="/index/center" v-if="Token && notAdmin" @click.native="goMenu('/index/center')">
						<span :style='{"padding":"0 10px","margin":"0","color":"inherit","display":"none","width":"14px","lineHeight":"auto","fontSize":"14px","height":"auto"}' class="icon iconfont icon-shouye-zhihui"></span>
						<span :style='{"padding":"0 10px","lineHeight":"auto","fontSize":"16px","color":"inherit","height":"auto"}'>个人信息</span>
					</el-menu-item>
				</el-menu>
			</el-scrollbar>
			</div>




			<div class="swiper3" :style='{"width":"100%","padding":"0","margin":"0px auto 0","height":"auto"}'>
			  <div class="swiper-container mySwiper3">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
			        <div :style='{"width":"100%","height":"auto"}'>
			          <el-image @click="carouselClick(item.url)" :style='{"objectFit":"cover","width":"100%","height":"620px"}' :src="baseUrl + item.value" fit="cover"></el-image>
			        </div>
			      </div>
			    </div>
			    <!-- Add Pagination -->
			    <div class="swiper-pagination" :style='{"width":"100%","left":"0","bottom":"110px"}'></div>
			    <!-- Add Arrows -->
			    <div class="swiper-button-next" :style='{"width":"24px","margin":"-12px 0 0","top":"50%","display":"none","height":"24px"}'>
			      <span class="icon iconfont icon-jiantou18" :style='{"width":"24px","fontSize":"24px","color":"#fff","height":"24px"}'></span>
			    </div>
			    <div class="swiper-button-prev" :style='{"width":"24px","margin":"-12px 0 0","top":"50%","display":"none","height":"24px"}'>
			      <span class="icon iconfont icon-jiantou39" :style='{"width":"24px","fontSize":"24px","color":"#fff","height":"24px"}'></span>
			    </div>
			  </div>
			</div>
			<router-view></router-view>
			
			<div class="bottom-preview" :style='{"width":"100%","height":"auto"}'>
				<div :style='{"minHeight":"100px","padding":"20px 7%","overflow":"hidden","color":"#fff","textAlign":"center","background":"#000a2f","width":"100%","fontSize":"14px","height":"auto"}'><div v-html="bottomContent"></div></div>
			</div>
		</div>
		
	</div>
</template>

<script>
import Vue from 'vue'
import Swiper from "swiper";
import axios from 'axios'

export default {
    data() {
		return {
            activeIndex: '0',
			roleMenus: [{"backMenu":[{"child":[{"allButtons":["新增","查看","修改","删除","首页总数"],"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除","首页总数"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"allButtons":["新增","查看","修改","删除","血压统计","血糖统计","每日血压","首页总数","首页统计"],"appFrontIcon":"cuIcon-explore","buttons":["查看","修改","删除","首页总数","首页统计"],"menu":"身体健康","menuJump":"列表","tableName":"shentijiankang"}],"menu":"身体健康管理"},{"child":[{"allButtons":["新增","查看","修改","删除","查看评论","首页总数","还书入库","借阅"],"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除","查看评论","首页总数","还书入库"],"menu":"公共书籍","menuJump":"列表","tableName":"gonggongshuji"}],"menu":"公共书籍管理"},{"child":[{"allButtons":["新增","查看","修改","删除","首页总数","归还"],"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","删除","首页总数","归还"],"menu":"借阅信息","menuJump":"列表","tableName":"jieyuexinxi"}],"menu":"借阅信息管理"},{"child":[{"allButtons":["新增","查看","修改","删除","审核"],"appFrontIcon":"cuIcon-copy","buttons":["查看","修改","删除","审核"],"menu":"归还信息","menuJump":"列表","tableName":"guihaixinxi"}],"menu":"归还信息管理"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除"],"menu":"还书入库","menuJump":"列表","tableName":"haishuruku"}],"menu":"还书入库管理"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除"],"menu":"图书分类","menuJump":"列表","tableName":"tushufenlei"}],"menu":"图书分类管理"},{"child":[{"allButtons":["新增","查看","修改","删除","活动报名人数","首页统计","报名"],"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除","首页统计"],"menu":"活动信息","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息管理"},{"child":[{"allButtons":["新增","查看","修改","删除","首页总数"],"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除","首页总数"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-goods","buttons":["新增","查看","修改","删除"],"menu":"活动分类","menuJump":"列表","tableName":"huodongfenlei"}],"menu":"活动分类管理"},{"child":[{"allButtons":["查看","修改"],"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"友情链接","tableName":"friendlink"},{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-newshot","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"allButtons":["新增","查看","修改","删除","查看评论"],"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除","查看评论"],"menu":"网站公告","tableName":"news"},{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"网站公告分类","tableName":"newstype"},{"allButtons":["查看","修改"],"appFrontIcon":"cuIcon-present","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"allButtons":["新增","查看","修改","删除","查看评论","首页总数","还书入库","借阅"],"appFrontIcon":"cuIcon-send","buttons":["查看","借阅"],"menu":"公共书籍列表","menuJump":"列表","tableName":"gonggongshuji"}],"menu":"公共书籍模块"},{"child":[{"allButtons":["新增","查看","修改","删除","活动报名人数","首页统计","报名"],"appFrontIcon":"cuIcon-similar","buttons":["查看","报名"],"menu":"活动信息列表","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"allButtons":["新增","查看","修改","删除","血压统计","血糖统计","每日血压","首页总数","首页统计"],"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除","首页总数","首页统计"],"menu":"身体健康","menuJump":"列表","tableName":"shentijiankang"}],"menu":"身体健康管理"},{"child":[{"allButtons":["新增","查看","修改","删除","首页总数","归还"],"appFrontIcon":"cuIcon-skin","buttons":["查看","首页总数","归还"],"menu":"借阅信息","menuJump":"列表","tableName":"jieyuexinxi"}],"menu":"借阅信息管理"},{"child":[{"allButtons":["新增","查看","修改","删除","审核"],"appFrontIcon":"cuIcon-copy","buttons":["查看"],"menu":"归还信息","menuJump":"列表","tableName":"guihaixinxi"}],"menu":"归还信息管理"},{"child":[{"allButtons":["新增","查看","修改","删除","活动报名人数","首页统计","报名"],"appFrontIcon":"cuIcon-vipcard","buttons":["查看","首页统计","报名"],"menu":"活动信息","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息管理"},{"child":[{"allButtons":["新增","查看","修改","删除","首页总数"],"appFrontIcon":"cuIcon-send","buttons":["查看","删除","首页总数"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"}],"frontMenu":[{"child":[{"allButtons":["新增","查看","修改","删除","查看评论","首页总数","还书入库","借阅"],"appFrontIcon":"cuIcon-send","buttons":["查看","借阅"],"menu":"公共书籍列表","menuJump":"列表","tableName":"gonggongshuji"}],"menu":"公共书籍模块"},{"child":[{"allButtons":["新增","查看","修改","删除","活动报名人数","首页统计","报名"],"appFrontIcon":"cuIcon-similar","buttons":["查看","报名"],"menu":"活动信息列表","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}],
			baseUrl: '',
			carouselList: [],
			menuList: [],
			form: {
				ask: '',
				userid: localStorage.getItem('userid')
			},
			headportrait: localStorage.getItem('headportrait')?localStorage.getItem('headportrait'):'',
			Token: localStorage.getItem('Token'),
            username: localStorage.getItem('username'),
            notAdmin: localStorage.getItem('sessionTable')!='"users"',
			timer: '',
			iconArr: [
				'el-icon-star-off',
				'el-icon-goods',
				'el-icon-warning',
				'el-icon-question',
				'el-icon-info',
				'el-icon-help',
				'el-icon-picture-outline-round',
				'el-icon-camera-solid',
				'el-icon-video-camera-solid',
				'el-icon-video-camera',
				'el-icon-bell',
				'el-icon-s-cooperation',
				'el-icon-s-order',
				'el-icon-s-platform',
				'el-icon-s-operation',
				'el-icon-s-promotion',
				'el-icon-s-release',
				'el-icon-s-ticket',
				'el-icon-s-management',
				'el-icon-s-open',
				'el-icon-s-shop',
				'el-icon-s-marketing',
				'el-icon-s-flag',
				'el-icon-s-comment',
				'el-icon-s-finance',
				'el-icon-s-claim',
				'el-icon-s-opportunity',
				'el-icon-s-data',
				'el-icon-s-check'
			],
			bottomContent: '本网站内呈现的任何内容，无论商标、设计、文字、图像和任何其他信息，未经特殊说明，其著作权均属xxx公司所有。',
		}
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.menuList = this.$config.indexNav;
		this.getCarousel();
        if(localStorage.getItem('Token') && localStorage.getItem('Token')!=null) {
			this.getSession()
        }
    },
    mounted() {
        this.activeIndex = localStorage.getItem('keyPath') || '0';


		// banner
		setTimeout(()=>{
			new Swiper(".mySwiper3", {"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"autoplay":{"delay":2500,"disableOnInteraction":false},"pagination":{"el":".swiper-pagination","clickable":true}})
		}, 10)

    },
    computed: {
		activeMenu() {
			const route = this.$route
			const {
				meta,
				path
			} = route
			// if st path, the sidebar will highlight the path you sete
			if (meta.activeMenu) {
				return meta.activeMenu
			}
			return path
		},
    },
    watch: {
        $route(newValue) {
            let that = this
            let url = window.location.href
            let arr = url.split('#')
            for (let x in this.menuList) {
                if (newValue.path == this.menuList[x].url) {
                    this.activeIndex = x
                }
            }
            this.Token = localStorage.getItem('Token')
            // window.scrollTo( 0, 100 )
        },
		headportrait(){
			this.$forceUpdate()
		},
    },
    methods: {

		getSession() {
			this.$http.get(`${localStorage.getItem('UserTableName')}/session`, {emulateJSON: true}).then(res => {
				if (res.data.code == 0) {
					localStorage.setItem('sessionForm',JSON.stringify(res.data.data))
					localStorage.setItem('userid', res.data.data.id);
					if(res.data.data.vip) {
						localStorage.setItem('vip', res.data.data.vip);
					}
					if(res.data.data.touxiang) {
						this.headportrait = res.data.data.touxiang
						localStorage.setItem('headportrait', res.data.data.touxiang);
					} else if(res.data.data.headportrait) {
						this.headportrait = res.data.data.headportrait
						localStorage.setItem('headportrait', res.data.data.headportrait);
					}
				}
			});
		},
        handleSelect(keyPath) {
            if (keyPath) {
                localStorage.setItem('keyPath', keyPath)
            }
        },
		toLogin() {
		  this.$router.push('/login');
		},
        logout() {
            localStorage.clear();
            Vue.http.headers.common['Token'] = "";
            this.$router.push('/index/home');
            this.activeIndex = '0'
            localStorage.setItem('keyPath', this.activeIndex)
            this.Token = ''
            this.$forceUpdate()
            this.$message({
                message: '登出成功',
                type: 'success',
                duration: 1000,
            });
        },
		getCarousel() {
			this.$http.get('config/list', {params: { page: 1, limit: 3 }}).then(res => {
				if (res.data.code == 0) {
					this.carouselList = res.data.data.list;
				}
			});
		},
		// 轮播图跳转
		carouselClick(url) {
			if (url) {
				if (url.indexOf('https') != -1) {
					window.open(url)
				} else {
					this.$router.push(url)
				}
			}
		},
		goBackend() {
			window.open(`${this.$config.baseUrl}admin/dist/index.html`, "_blank");
		},
		goMenu(path) {
            this.$router.push(path);
		},
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.menu-preview {
	  .el-scrollbar {
	    height: 100%;
	  
	    & /deep/ .scrollbar-wrapper-vertical {
	      overflow-x: hidden;
	    }
	  
	    & /deep/ .scrollbar-wrapper-horizontal {
	      overflow-y: hidden;
	  
	      .el-scrollbar__view {
	        white-space: nowrap;
	      }
	    }
	  }
	}
	
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home {
				cursor: pointer;
				border: 0;
				padding: 0 12px;
				margin: 0;
				color: #333;
				white-space: nowrap;
				display: flex;
				font-size: 16px;
				line-height: 66px;
				background: none;
				justify-content: center;
				align-items: center;
				position: relative;
				list-style: none;
				min-width: 100px;
				height: 66px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home:hover {
				color: #fff;
				background: #000a2f;
				border-color: #f95927;
				border-width: 0 0 0px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home.is-active {
				color: #fff;
				background: #000a2f;
				border-color: #f95927;
				border-width: 0 0 0px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user {
				cursor: pointer;
				border: 0;
				padding: 0 0px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 90px;
				background: none;
				align-items: center;
				position: relative;
				list-style: none;
				height: 90px;
				order: 3;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user:hover {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user.is-active {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service {
				cursor: pointer;
				border: 0;
				padding: 0 12px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 44px;
				background: none;
				align-items: center;
				position: relative;
				list-style: none;
				height: 44px;
				order: 4;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service:hover {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service.is-active {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop {
				cursor: pointer;
				border: 0;
				padding: 0 12px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 44px;
				background: none;
				align-items: center;
				list-style: none;
				height: 44px;
				order: 5;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop:hover {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop.is-active {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back {
				cursor: pointer;
				border: 0;
				padding: 0 12px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 44px;
				background: none;
				align-items: center;
				position: relative;
				list-style: none;
				height: 44px;
				order: 6;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back:hover {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back.is-active {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item {
				cursor: pointer;
				padding: 0 12px;
				margin: 0;
				color: #333;
				white-space: nowrap;
				display: flex;
				font-size: 16px;
				border-color: #ddd;
				line-height: 66px;
				background: none;
				justify-content: center;
				border-width: 0 0px 0 0;
				align-items: center;
				position: relative;
				border-style: solid;
				list-style: none;
				text-align: center;
				min-width: 100px;
				height: 66px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item:hover {
				color: #fff;
				background: #000a2f;
				border-color: #f95927;
				border-width: 0 0 0px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item.is-active {
				color: #fff;
				background: #000a2f;
				border-color: #f95927;
				border-width: 0 0 0px;
				border-style: solid;
			}
	
	.banner-preview {
	  .el-carousel /deep/ .el-carousel__indicator button {
	    width: 0;
	    height: 0;
	    display: none;
	  }
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: red;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: red;
	}

	.banner-preview .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li:hover {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 0.7;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li.is-active {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 1;
		height: 12px;
	}

    .chat-content {
        padding-bottom: 20px;
        width: 100%;
        margin-bottom: 10px;
        max-height: 300px;
        height: 300px;
        overflow-y: scroll;
        border: 1px solid #eeeeee;
        background: #fff;

        .left-content {
            float: left;
            margin-bottom: 10px;
            padding: 10px;
            max-width: 80%;
        }

        .right-content {
            float: right;
            margin-bottom: 10px;
            padding: 10px;
            max-width: 80%;
        }
    }

    .clear-float {
        clear: both;
    }


	.swiper3 .swiper-button-prev:after {
      display:none;
    }
    .swiper3 .swiper-button-next:after {
      display:none;
    }
	.main-containers .swiper3 .swiper-pagination /deep/ span.swiper-pagination-bullet {
				border-radius: 0;
				margin: 0 4px;
				background: #d8d8d8;
				display: inline-block;
				width: 80px;
				opacity: .5;
				height: 4px;
			}
	
	.main-containers .swiper3 .swiper-pagination /deep/ span.swiper-pagination-bullet:hover {
				background: #176768;
				opacity: 1;
			}
	
	.main-containers .swiper3 .swiper-pagination /deep/ span.swiper-pagination-bullet.swiper-pagination-bullet-active {
				background: #176768;
				opacity: 1;
			}
	
	// -------- search --------
	.main-containers .search .select /deep/ .el-input__inner {
				border: 0;
				border-radius: 50px 0 0 50px;
				padding: 0 20px 0 40px;
				outline: none;
				color: #999;
				background: #f5f5f5;
				width: 140px;
				font-size: 16px;
				height: 44px;
			}
	
	.main-containers .search .input /deep/ .el-input__inner {
				border: 0;
				border-radius: 0px;
				padding: 0 20px 0 60px;
				outline: none;
				color: #999;
				background: url(http://codegen.caihongy.cn/20231006/d3d4999528a4463b84be7ccbdd1c1524.png) no-repeat 40px center,#f5f5f5;
				width: 350px;
				font-size: 16px;
				height: 44px;
			}
	// -------- search --------
	
	.main-containers .btn-service {
				border: 0;
				padding: 0 8px 0 28px;
				margin: 0 10px;
				color: inherit;
				background: url(http://codegen.caihongy.cn/20231006/74238047b48b4786a227a25606642e6d.png) no-repeat left center;
				width: auto;
				font-size: inherit;
				line-height: 32px;
				float: right;
				height: 32px;
			}
	
	.main-containers .btn-service:hover {
			}
	
	.main-containers .btn-shop {
				border: 0;
				padding: 0 8px 0 28px;
				margin: 0 10px;
				color: inherit;
				background: url(http://codegen.caihongy.cn/20231006/efb8028a6ce0422a843a727baa3b4048.png) no-repeat left center;
				width: auto;
				font-size: inherit;
				line-height: 32px;
				float: right;
				height: 32px;
				order: 2;
			}
	
	.main-containers .btn-shop:hover {
			}
</style>
