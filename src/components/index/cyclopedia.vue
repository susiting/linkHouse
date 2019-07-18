<template>
	<main>
		<div class="headUser">
			<div class="headUserSe c">
				<img src="../../assets/home/homelogo.png" class="l" />
				<div class="headUserFont l">
					<p class="headUserFontTop">使用链家APP</p>
					<p class="headUserFontBottom">即享个性化房源推荐</p>
				</div>
				<p class="headCloseRight r">立即打开</p>
			</div>
		</div>
		<header class="linkHouse c">
			<p class="headreturn l">
				<router-link to="/">
					<mt-button icon="back"></mt-button>
				</router-link>
			</p>
			<p class="headlocal l">
				广州
				<i class="iconfont" id="iconDrop">&#xe756;</i>
			</p>
			<div class="headImg l">
				<router-link to="/home">
					<img src="../../assets/home/logo.png" />
				</router-link>
			</div>
			<div class="headRight r">
				<i class="iconfont" id="person">&#xe706;</i>
			</div>
		</header>
		<p class="resoldSearchInput c">
			<i class="iconfont l" id="resoldSearch">&#xe638;</i>
			<input type="text" placeholder="知识产权有疑问？来搜搜吧~" class="l" />
			</input>
		</p>
		<div class="cycSwipe">
			<nav class="part_swipe">
				<mt-swipe :auto="4000">
					<mt-swipe-item>
						<img src="../../assets/home/cycSwipe3.jpg" />
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="../../assets/home/cycSwipe2.jpg" />
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="../../assets/home/cycSwipe1.jpg" />
					</mt-swipe-item>
				</mt-swipe>
			</nav>
		</div>

		<section class="cycNav c">
			<ul>
				<li>
					<i class="iconfont">&#xe628;</i>
					<p>二手房</p>
				</li>
				<li>
					<i class="iconfont">&#xe6ec;</i>
					<p>新房</p>
				</li>
				<li>
					<i class="iconfont">&#xeae6;</i>
					<p>卖房</p>
				</li>
				<li>
					<i class="iconfont">&#xe63d;</i>
					<p>换房</p>
				</li>
				<li>
					<i class="iconfont">&#xe6b9;</i>
					<p>海外买房</p>
				</li>
				<li>
					<i class="iconfont">&#xe647;</i>
					<p>全部</p>
				</li>
			</ul>
		</section>
		<section class="cycTab c">
			<ul class="tabLe l c">
				<li @click="change(index)" v-for="(item,index) in tabLe" :class="{cycActive:index==num}">{{item.title}}</li>
			</ul>
			<ul class=" r tabRi" v-show="num==0">
				<li v-for="(item,index) in tabRiFir">
					<p>{{item.title}}</p>
					<span>{{item.tab1}}</span><span>{{item.tab2}}</span><span>{{item.tab3}}</span>
				</li>
			</ul>
			<ul class=" r tabRi" v-show="num==1">
				<li v-for="(item,index) in tabRiSe">
					<p>{{item.title}}</p>
					<span>{{item.tab1}}</span><span>{{item.tab2}}</span><span>{{item.tab3}}</span>
				</li>
			</ul>
			<ul class=" r tabRi" v-show="num==2">
				<li v-for="(item,index) in tabRiTh">
					<p>{{item.title}}</p>
					<span>{{item.tab1}}</span><span>{{item.tab2}}</span><span>{{item.tab3}}</span>
				</li>
			</ul>
			<ul class=" r tabRi" v-show="num==3">
				<li v-for="(item,index) in tabRiFo">
					<p>{{item.title}}</p>
					<span>{{item.tab1}}</span><span>{{item.tab2}}</span><span>{{item.tab3}}</span>
				</li>
			</ul>
			<ul class=" r tabRi" v-show="num==4">
				<li v-for="(item,index) in tabRiFi">
					<p>{{item.title}}</p>
					<span>{{item.tab1}}</span><span>{{item.tab2}}</span><span>{{item.tab3}}</span>
				</li>
			</ul>
			<ul class=" r tabRi" v-show="num==5">
				<li v-for="(item,index) in tabRiSix">
					<p>{{item.title}}</p>
					<span>{{item.tab1}}</span><span>{{item.tab2}}</span><span>{{item.tab3}}</span>
				</li>
			</ul>
		</section>
		<footer class="c">
			<p class="c">
				<span class="l">广州手机链家网</span>
				<span class="l">隐私声明</span>
				<span class="l">营业执照</span>
			</p>

			<div class="c tabSwitch">
				<mt-navbar v-model="active">
					<mt-tab-item id="4" class="tabItem">二手房</mt-tab-item>
					<mt-tab-item id="5" class="tabItem">热门小区</mt-tab-item>
					<mt-tab-item id="6" class="tabItem">二手房</mt-tab-item>
					<mt-tab-item id="7" class="tabItem tabItemLast">新房</mt-tab-item>
				</mt-navbar>

				<mt-tab-container v-model="active">
					<mt-tab-container-item id="4">
						<ul>
							<li>上海二手房</li>
							<li>惠州二手房</li>
							<li>深圳二手房</li>
							<li>合肥二手房</li>
							<li>北京二手房</li>
							<li>上饶二手房</li>
							<li>常德二手房</li>
							<li>珠海二手房</li>
							<li>岳阳二手房</li>
							<li>安庆二手房</li>
							<li>广州二手房</li>
							<li>重庆二手房</li>
						</ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="5">
						<ul>
							<li>江丽苑</li>
							<li>科城山庄</li>
							<li>富丽家园</li>
							<li>新市花园</li>
							<li>站前路</li>
							<li>美心翠</li>
							<li>置业广场</li>
							<li>南园居</li>
							<li>金海岸花园</li>
							<li>华侨新村</li>
							<li>嘉宝华庭</li>
							<li>雅居乐</li>
						</ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="6">
						<ul>
							<li>上海房产</li>
							<li>惠州房产</li>
							<li>深圳房产</li>
							<li>合肥房产</li>
							<li>北京房产</li>
							<li>上饶房产</li>
							<li>常德房产</li>
							<li>珠海房产</li>
							<li>岳阳房产</li>
							<li>安庆房产</li>
							<li>广州房产</li>
							<li>重庆房产</li>
						</ul>
					</mt-tab-container-item>
					<mt-tab-container-item id="7">
						<ul>
							<li>上海新房</li>
							<li>惠州新房</li>
							<li>深圳新房</li>
							<li>合肥新房</li>
							<li>北京新房</li>
							<li>上饶新房</li>
							<li>常德新房</li>
							<li>珠海新房</li>
							<li>岳阳新房</li>
							<li>安庆新房</li>
							<li>广州新房</li>
							<li>重庆新房</li>
						</ul>
					</mt-tab-container-item>
				</mt-tab-container>

				<div class="footerBot">
					<img src="../../assets/home/footer.png" class="l footerBotLe" />
					<img src="../../assets/home/footer1.png" class="r footerBotRi" />
				</div>
			</div>

		</footer>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				active: "4",
				tabLe: [],
				tabRiFir: [],
				tabRiSe: [],
				tabRiTh: [],
				tabRiFo: [],
				tabRiFi: [],
				tabRiSix: [],
				num: 0
			}
		},
		mounted() {
			var _this = this;
			this.$http.get('./data/data.json')
				.then(function(res) {
					_this.tabLe = res.data.tabLe
					_this.tabRiFir = res.data.tabRiFir
					_this.tabRiSe = res.data.tabRiSe
					_this.tabRiTh = res.data.tabRiTh
					_this.tabRiFo = res.data.tabRiFo
					_this.tabRiFi = res.data.tabRiFi
					_this.tabRiSix = res.data.tabRiSix
				})
				.catch(() => {

				})
				.finally((f) => {})
		},
		methods: {
			change(a) {
				this.num = a;
			},
		}
	}
</script>

<style scoped>
	.headUser {
		margin: 16px auto;
		width: 90%;
		padding: 0 15px;
		overflow: hidden;
		box-shadow: 0 5px 10px rgba(0, 0, 0, .15);
		border-radius: 12px;
	}
	
	.headUser img {
		width: 50px;
		margin: 14px 0px;
	}
	
	.headUserFont {
		padding: 12px 0 25px 20px;
	}
	
	.headUserFontTop {
		color: #394043;
		margin-top: 2px;
		font-size: 16px;
	}
	
	.headUserFontBottom {
		margin-top: 4px;
		color: #9c9fa1;
		font-size: 11px;
	}
	
	.headUser .headCloseRight {
		margin: 23px 0;
	}
	
	.headCloseRight {
		padding: 6px 14px;
		text-align: center;
		color: white;
		font-size: 14px;
		background-color: #00ae66;
		border-radius: 2px;
	}
	
	.close {
		color: #9c9fa1;
		line-height: 0;
		font-size: 12px;
		margin-top: 4px;
	}
	
	.resoldSearchInput {
		width: 90%;
		margin-left: 5%;
		margin-top: 10px;
		border-radius: 3px;
		background-color: #fff;
		border: 0.5px #e8e8e9 solid;
	}
	
	.resoldSearchInput input {
		width: 90%;
		line-height: 28px;
		border: none;
		outline: none;
		font-size: 12px;
	}
	
	#resoldSearch {
		font-size: 14px;
		padding: 6px 5px 4px 6px;
		color: grey;
	}
	/*cycSwipe*/
	
	.cycSwipe {
		margin-top: 10px;
	}
	
	.part_swipe {
		width: 100%;
		padding-bottom: 40%;
		overflow: hidden;
		position: relative;
	}
	
	.mint-swipe {
		width: 100%;
		position: absolute;
	}
	
	.mint-swipe-item>img {
		width: 100%;
	}
	
	.mint-swipe-indicator {
		border: 2px solid #fff;
		border-radius: 50%;
		opacity: 1;
		box-sizing: border-box;
		background-color: white;
	}
	/*cycNav*/
	
	.cycNav {
		padding: 20px 0;
		text-align: center;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.cycNav ul li {
		width: 16%;
		float: left;
		color: #6b7072;
	}
	
	.cycNav ul li:nth-child(1) {
		margin-left: 2%;
	}
	
	.cycNav ul li i {
		font-size: 26px;
	}
	/*cycTab*/
	
	.tabLe {
		width: 25%;
		text-align: center;
		font-size: 14px;
		color: #6b7072;
		background-color: #F5F5F5;
	}
	
	.tabLe li {
		padding: 15px 0;
		border-right: 0.5px solid gainsboro;
	}
	
	.tabRi {
		padding-right: 3%;
		width: 70%;
	}
	
	.tabRi li {
		padding: 15px 0;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.tabRi li p {
		font-size: 16px;
		font-weight: bold;
		color: #333;
		margin-bottom: 6px;
	}
	
	.tabRi li span {
		font-size: 11px;
		color: #849aae;
		margin-right: 5%;
		background-color: #f4f7f9;
		border-radius: 2px;
	}
	
	.cycActive {
		background-color: #fff;
		border-top: 0.5px solid gainsboro;
		border-bottom: 0.5px solid gainsboro;
		border-right: none!important;
	}
</style>
<style type="text/css">
	.mint-swipe-indicator {
		background-color: white;
	}
	
	.mint-swipe-indicator.is-active {
		background: green;
		z-index: 2;
	}
</style>