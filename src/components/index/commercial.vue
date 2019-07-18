<template>
	<main>
		<header class="linkHouse c">
			<p class="headreturn l">
				<router-link to="/">
					<mt-button icon="back"></mt-button>
				</router-link>
			</p>
			<div class="headImg l">
				<router-link to="/home">
					<img src="../../assets/home/commerLogo.png" />
				</router-link>
			</div>
		</header>
		<section class="commerSearch">
			<p class="contFirstBot c">
				<span class="l">广州</span>
				<i class="iconfont l" id="search">&#xe638;</i>
				<input type="text" placeholder="搜索商铺或者写字楼" class="l" />
				</input>
			</p>
		</section>
		<section class="commerFir c">
			<ul>
				<li>
					<img src="../../assets/home/home5.png" />
					<p>租写字楼</p>
				</li>
				<li>
					<img src="../../assets/home/home3.png" />
					<p>买写字楼</p>
				</li>
				<li>
					<img src="../../assets/home/home4.png" />
					<p>租商铺</p>
				</li>
				<li>
					<img src="../../assets/home/home1.png" />
					<p>买商铺</p>
				</li>
				<li>
					<img src="../../assets/home/home2.png" />
					<p>在线委托</p>
				</li>
			</ul>
		</section>
		<p class="commerP c">
			<span class="l">租写字楼</span>
			<i class="iconfont r">&#xe631;</i>
			<span class="r">查看全部</span>
		</p>
		<section class="commerList c">
			<ul>
				<li>
					<div class="l">
						<p>天河区</p>
						<p>天河区CBD</p>
					</div>
					<img src="../../assets/home/commerTop7.png" class="r" />
				</li>
				<li>
					<div class="l">
						<p>海珠区</p>
						<p>配套齐全</p>
					</div>
					<img src="../../assets/home/commerTop8.png" class="r" />
				</li>
				<li>
					<div class="l">
						<p>越秀区</p>
						<p>交通网络完善</p>
					</div>
					<img src="../../assets/home/commerTop9.png" class="r" />
				</li>
				<li>
					<div class="l">
						<p>白云区</p>
						<p>电商聚集地</p>
					</div>
					<img src="../../assets/home/commerTop6.png" class="r" />
				</li>
			</ul>
		</section>
		<section class="commerSwiper">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) in commercialFirst">
					<img :src="item.src" />
					<div class="good">
						<p>{{item.title}}</p>
						<p>{{item.feature}}</p>
						<p>{{item.price}}</p>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</section>

		<p class="commerP c">
			<span class="l">买写字楼</span>
			<i class="iconfont r">&#xe631;</i>
			<span class="r">查看全部</span>
		</p>
		<section class="commerList c">
			<ul>
				<li>
					<div class="l">
						<p>整层出售</p>
						<p>灵活实用</p>
					</div>
					<img src="../../assets/home/commerTop6.png" class="r" />
				</li>
				<li>
					<div class="l">
						<p>地铁周边</p>
						<p>交通便利</p>
					</div>
					<img src="../../assets/home/commerTop11.png" class="r" />
				</li>
				<li>
					<div class="l">
						<p>知名物业</p>
						<p>享优质配套</p>
					</div>
					<img src="../../assets/home/commerTop10.png" class="r" />
				</li>
				<li>
					<div class="l">
						<p>单价3万</p>
						<p>置业无压力</p>
					</div>
					<img src="../../assets/home/commerTop9.png" class="r" />
				</li>
			</ul>
		</section>
		<section class="commerSwiper">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) in commercialSecond">
					<img :src="item.src" />
					<div class="good">
						<p>{{item.title}}</p>
						<p>{{item.feature}}</p>
						<p>{{item.price}}</p>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</section>
		<p class="commerP c">
			<span class="l">租商铺</span>
			<i class="iconfont r">&#xe631;</i>
			<span class="r">查看全部</span>
		</p>
		<section class="commerList c">
			<ul>
				<li>
					<div class="l">
						<p>CBD商圈</p>
						<p>商办首选地区</p>
					</div>
					<img src="../../assets/home/commerTop7.png" class="r" />
				</li>
				<li>
					<div class="l">
						<p>近地铁</p>
						<p>地铁沿线</p>
					</div>
					<img src="../../assets/home/commerTop11.png" class="r" />
				</li>
				<li>
					<div class="l">
						<p>知名物业</p>
						<p>旺铺聚集地</p>
					</div>
					<img src="../../assets/home/commerTop10.png" class="r" />
				</li>
				<li>
					<div class="l">
						<p>商业综合</p>
						<p>核心地段</p>
					</div>
					<img src="../../assets/home/commerTop12.png" class="r" />
				</li>
			</ul>
		</section>
		<section class="commerSwiper">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) in commercialThird">
					<img :src="item.src" />
					<div class="good">
						<p>{{item.title}}</p>
						<p>{{item.feature}}</p>
						<p>{{item.price}}</p>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</section>
		<div class="exp">
			<h2>商铺租聘专家</h2>
		</div>
		<p class="expert">
			<img src="../../assets/home/commerExper.png" />
		</p>
		<p class="banner">
			<img src="../../assets/home/commerBanner.png" />
		</p>
		<section class="commerFooter c">
			<div class="commerFooterTop c">
				<h3 class="l">在线委托</h3>
				<span class="r" :class="{active:num==0}" @click="change()">投放房源</span>
				<span class="r" :class="{active:num==1}" @click="changeSe()">帮我找房</span>
			</div>
			<ul class="myFooterCont c" v-show="num==1">
				<li class="cont">
					找房类型<i class="iconfont">&#xe631;</i><span>请选择</span>
				</li>
				<li class="cont">
					姓名<input type="text" placeholder="请输入姓名" class="commerName" />
				</li>
				<li class="cont">
					联系方式<input type="text" placeholder="请输入手机号码" />
				</li>
				<li class="cont">
					地址<i class="iconfont">&#xe631;</i><span>请选择</span>
				</li>
				<li class="cont">
					验证码<span id="sent">发送验证码</span><input type="text" placeholder="请输入验证码" />
				</li>
			</ul>
			<ul class="myFooterCont c" v-show="num==0">
				<li class="cont">
					投放类型<i class="iconfont">&#xe631;</i><span>请选择</span>
				</li>
				<li class="cont">
					姓名<input type="text" placeholder="请输入姓名" class="commerName" />
				</li>
				<li class="cont">
					联系方式<input type="text" placeholder="请输入手机号码" />
				</li>
				<li class="cont">
					地址<i class="iconfont">&#xe631;</i><span>请选择</span>
				</li>
				<li class="commercon">
					<span class="commerDetail">请输入详细地址 例： xx街道xx大厦</span>
				</li>
				<li class="cont">
					验证码<span id="sent">发送验证码</span><input type="text" placeholder="请输入验证码" />
				</li>
			</ul>
			<p id="input" class="c">提交</p>
		</section>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				num: "1",
				commercialFirst: [],
				commercialSecond: [],
				commercialThird: [],
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						type: 'progressbar'
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				}
			}
		},
		mounted() {
			var _this = this;
			this.$http.get('./data/data.json')
				.then(function(res) {
					_this.commercialFirst = res.data.commercialFirst
					_this.commercialSecond = res.data.commercialSecond
					_this.commercialThird = res.data.commercialThird
				})
				.catch(() => {

				})
				.finally((f) => {})

		},
		methods: {
			change() {
				this.num = 0;
			},
			changeSe() {
				this.num = 1;
			}
		}
	}
</script>

<style scoped>
	.linkHouse .headImg {
		height: 35px;
	}
	
	.headImg img {
		width: 97px;
		height: 18px;
		margin-top: 6px;
	}
	/*commerSearch*/
	
	.commerSearch {
		padding: 30px 30px 20px;
	}
	
	.contFirstBot {
		padding: 0 10px;
		border-radius: 5px;
		background-color: white;
		font-size: 14px;
		border: 0.5px solid #CED1D6;
	}
	
	.contFirstBot input {
		width: 70%;
		line-height: 50px;
		border: none;
		outline: none;
	}
	
	.contFirstBot span {
		color: #333;
		margin-top: 5px;
		padding: 10px;
	}
	
	#search {
		font-size: 14px;
		padding: 0 3px 0 20px;
		margin-top: 18px;
		color: grey;
		border-left: 1px gainsboro solid;
	}
	/*commerFir*/
	
	.commerFir {
		padding: 0 20px;
	}
	
	.commerFir ul li {
		width: 20%;
		float: left;
		text-align: center;
	}
	
	.commerFir ul li img {
		width: 46px;
		margin-bottom: 5px;
	}
	
	.commerFir ul li p {
		color: #394043;
		font-weight: bold;
	}
	
	.commerP {
		padding: 30px;
		margin-top: 20px;
	}
	
	.commerP span:nth-of-type(1),
	h2 {
		font-size: 24px;
		color: #333;
		font-weight: bold;
	}
	
	.commerP span:nth-of-type(2) {
		color: rgb(147, 153, 165);
		padding: 7px;
		font-size: 13px;
	}
	
	.commerP i {
		color: rgb(147, 153, 165);
		padding: 9px 0;
		font-size: 12px;
	}
	/*commerList*/
	
	.commerList {
		padding: 0 30px;
	}
	
	.commerList ul li {
		width: 50%;
		float: left;
		margin-bottom: 20px;
	}
	
	.commerList ul li:nth-child(2n) {
		padding-left: 10%;
	}
	
	.commerList ul li p:nth-child(1) {
		font-size: 16px;
		font-weight: bold;
	}
	
	.commerList ul li p:nth-child(2) {
		margin-top: 2px;
		color: rgb(147, 153, 165);
	}
	
	.commerList ul li img {
		width: 55px;
	}
	
	.commerList ul li:nth-child(2n+1) img {
		margin-right: 10%;
	}
	/*commerSwiper*/
	
	.commerSwiper {
		padding: 0 30px;
	}
	
	.commerSwiper img {
		width: 160px;
		border-radius: 3px;
		margin-bottom: 15px;
	}
	
	.swiper-pagination-progressbar {
		background: gainsboro;
		top: 130px;
	}
	
	.good {
		width: 45%;
		float: right;
		margin-top: 15px;
	}
	
	.good p:nth-of-type(1) {
		font-size: 18px;
		color: rgb(16, 29, 55);
		font-weight: bold;
		margin-bottom: 8px;
	}
	
	.good p:nth-of-type(2) {
		font-size: 12px;
		color: rgb(16, 29, 55);
	}
	
	.good p:nth-of-type(3) {
		font-size: 16px;
		color: rgb(254, 97, 90);
		font-weight: bold;
		margin-top: 15px;
	}
	
	.banner {
		padding: 0 25px;
	}
	
	.banner img {
		width: 100%;
	}
	
	.exp {
		padding: 40px 30px 0;
	}
	/*expert*/
	
	.expert {
		padding: 20px 30px;
	}
	
	.expert img {
		width: 100%;
	}
	/*myfooter*/
	
	.commerFooter {
		padding: 40px 30px 0;
	}
	
	.myFooterCont {
		width: 100%;
		float: left;
		font-size: 14px;
		line-height: 55px;
		margin-bottom: 20px;
	}
	
	.footCont {
		float: right;
		font-size: 16px;
		color: gainsboro;
	}
	
	.cont {
		width: 100%;
		float: left;
		border-bottom: 1px solid gainsboro;
		color: rgb(16, 29, 55);
		font-size: 16px;
	}
	
	.cont span {
		font-size: 14px;
	}
	
	.cont input {
		margin-top: 20px;
		float: right;
		width: 96px;
	}
	
	.commerName {
		width: 70px;
	}
	
	.cont i,
	.cont span {
		float: right;
		color: #757575;
	}
	
	.cont i {
		font-size: 12px;
		margin-left: 3%;
	}
	/*commerFooterTop*/
	
	.commerFooterTop h3 {
		font-size: 24px;
		color: rgb(16, 29, 55);
	}
	
	.commerFooterTop span {
		font-size: 16px;
		color: rgb(147, 153, 165);
		margin-top: 5px;
	}
	
	.commerFooterTop span:nth-of-type(2) {
		margin-right: 8%;
	}
	
	#sent {
		color: rgb(48, 114, 246);
	}
	
	#input {
		font-size: 16px;
		margin-top: 30px;
		width: 100%;
		text-align: center;
		color: white;
		background-color: rgb(48, 114, 246);
		padding: 10px 0;
		border-radius: 2px;
	}
	
	.commercon {
		border-bottom: 1px solid gainsboro;
	}
	
	.commerDetail {
		font-size: 12px;
		color: #757575;
	}
	
	.active {
		font-weight: bold;
		color: rgb(48, 114, 246)!important;
	}
</style>

<style>
	.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
		background: #00ae65;
	}
</style>