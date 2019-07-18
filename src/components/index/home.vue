<template>
	<main>
		<header id="homeHead">
			<section class="headClose c" v-show="show">
				<div class="headCloseSe c l">
					<img src="../../assets/home/homelogo.png" class="l" />
					<span class="l">使用链家APP</span>
					<p class="close r" @click="close()">
						x
					</p>
					<div class="headCloseRight r">立即打开</div>
				</div>
			</section>
			<section class="headUser c">
				<div class="headUserSe c">
					<img src="../../assets/home/homelogo.png" class="l" />
					<div class="headUserFont l">
						<p class="headUserFontTop">使用链家APP</p>
						<p class="headUserFontBottom">即享个性化房源推荐</p>
					</div>
					<p class="headCloseRight r">立即打开</p>
				</div>
			</section>
		</header>
		<section class="contFirst c">
			<div class="contFirstTop">
				<p class="contFirstTopLe l">
					广州<i class="iconfont">&#xe756;</i>
				</p>
				<div class="contFirstTopRi r">
					<router-link to="/my">
						<i class="iconfont" id="contFirstTopRiIcon">&#xe706;</i>
					</router-link>
				</div>
			</div>
			<p class="contFirstMid">连接每个家的故事</p>
			<p class="contFirstBot c">
				<i class="iconfont l" id="search">&#xe638;</i>
				<input type="text" placeholder="输入小区或者商圈开始找房咯" class="l" />
				</input>
			</p>
		</section>

		<section class="contSecond c">
			<ul>
				<li>
					<router-link to="/resoldHouse">
						<img src="../../assets/home/home1.png" />
						<p>二手房</p>
					</router-link>
				</li>
				<li>
					<router-link to="/newHouse">
						<img src="../../assets/home/home2.png" />
						<p>新房</p>
					</router-link>
				</li>
				<li>
					<router-link to="/rentHouse">
						<img src="../../assets/home/home3.png" />
						<p>租房</p>
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<img src="../../assets/home/home4.png" />
						<p>卖房</p>
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<img src="../../assets/home/home5.png" />
						<p>海外</p>
					</router-link>
				</li>
				<li>
					<router-link to="/commercial">
						<img src="../../assets/home/home6.png" />
						<p>商业办公</p>
					</router-link>
				</li>
				<li>
					<router-link to="/plot">
						<img src="../../assets/home/home7.png" />
						<p>找小区</p>
					</router-link>
				</li>
			</ul>
		</section>
		<section class="contThird c">
			<div class="contThirdDe">
				<h4>常用工具</h4>
			</div>
			<ul class="contThirdImg">
				<li>
					<router-link to="/assess">
						<img src="../../assets/home/con1.png" />
						<p>去评估</p>
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<img src="../../assets/home/con2.png" />
						<p>找经纪人</p>
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<img src="../../assets/home/con3.png" />
						<p>问答</p>
					</router-link>
				</li>
				<li>
					<router-link to="/cyclopedia">
						<img src="../../assets/home/con4.png" />
						<p>百科</p>
					</router-link>
				</li>
				<li>
					<router-link to="/">
						<img src="../../assets/home/con5.png" />
						<p>客服电话</p>
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<img src="../../assets/home/con6.png" />
						<p>购房资质</p>
					</router-link>
				</li>
				<li>
					<router-link to="/pay">
						<img src="../../assets/home/con7.png" />
						<p>最低首付</p>
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<img src="../../assets/home/con8.png" />
						<p>查成交</p>
					</router-link>
				</li>
			</ul>
		</section>
		<section class="contFour c">
			<div class="contThirdDe c">
				<h4 class="l">为您推荐</h4>
				<div class="contFourRi r">
					<mt-navbar v-model="selected">
						<span><mt-tab-item id="1">二手房</mt-tab-item></span>
						<span><mt-tab-item id="2">新房</mt-tab-item></span>
						<span> <mt-tab-item id="3">租房</mt-tab-item></span>
					</mt-navbar>
				</div>
			</div>

			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<ul class="contFourUsed c">
						<li v-for="(item,index) in list" class="c commonList">
							<router-link to="/detail">
								<img :src="item.src" class="l" />
								<div class="usedHouse l">
									<h3>{{item.title}}</h3>
									<p>{{item.detail}}</p>
									<p><span class="toRed">{{item.price}}</span>{{item.detailPrice}}</p>
									<ul>
										<li class="l">{{item.feature01}}</li>
										<li class="l">{{item.feature02}}</li>
										<li class="l">{{item.feature03}}</li>
										<li class="l">{{item.feature04}}</li>
									</ul>
								</div>
							</router-link>
						</li>
						<li>
							<div class="more">
								<router-link to="/resoldHouse">
									<p>查看全部二手房源</p>
								</router-link>
							</div>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<ul class="contFourUsed c">
						<li v-for="(item,index) in newList" class="c commonList">
							<router-link to="/detail">
								<img :src="item.src" class="l" />
								<div class="newHouse l">
									<div class="newHouseTop c">
										<h3 class="l">{{item.title}}</h3>
										<span class="newHouseTopLife l">住宅</span>
										<span class="newHouseTopSale l">在售</span>
									</div>
									<p>{{item.address}}</p>
									<ul class="newHouseSign c">
										<li class="l">{{item.feature01}}</li>
										<li class="l">{{item.feature02}}</li>
										<li class="l">{{item.feature03}}</li>
									</ul>
									<span class="toRed">{{item.price}}</span>
								</div>
							</router-link>
						</li>
						<li>
							<div class="more">
								<router-link to="/newHouse">
									<p>查看全部新房房源</p>
								</router-link>
							</div>
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<ul class="contFourUsed c">
						<li v-for="(item,index) in rentList" class="c commonList">
							<router-link to="/detail">
								<img :src="item.src" class="l" />
								<div class="rentHouse l">
									<h3>{{item.title}}</h3>
									<p>{{item.feature}}</p>
									<span class="toRed">{{item.price}}</span>
								</div>
							</router-link>
						</li>
						<li>
							<div class="more">
								<router-link to="/rentHouse">
									<p>查看全部租房房源</p>
								</router-link>
							</div>
						</li>
					</ul>
				</mt-tab-container-item>
			</mt-tab-container>

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
		<div id="homeFixed">
			<router-link to="/my">
			<img src="../../assets/home/homefixed.png" />
			</router-link>
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				selected: "1",
				active: "4",
				list: [],
				newList: [],
				rentList: []
			}
		},
		mounted() {
			var _this = this;
			this.$http.get('./data/data.json')
				.then(function(res) {
					_this.list = res.data.list
					_this.newList = res.data.newList
					_this.rentList = res.data.rentList
				})
				.catch(() => {

				})
				.finally((f) => {})
		},
		methods: {
			close() {
				this.show = !this.show
				homeHead.style.marginTop = 0
			}
		}
	}
</script>

<style scoped>
	header {
		margin-top: 60px;
	}
	
	.headClose {
		padding: 8px 15px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, .15);
		top: 0;
		left: 0;
		position: fixed;
		background-color: #fff;
		z-index: 2;
	}
	
	.headCloseSe .headCloseRight {
		margin-top: 2px;
	}
	
	.headClose img {
		width: 34px;
		margin-right: 4%;
	}
	
	.headClose span {
		margin-top: 4px;
		font-size: 16px;
		color: #394043;
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
	/*contFirst*/
	
	.contFirst {
		padding: 10px 15px;
		background-image: url(../../assets/home/head_bg.jpg);
		background-size: 100% auto;
	}
	
	.contFirstTop {
		width: 100%;
		height: 30px;
	}
	
	.contFirstTopLe {
		padding: 4px 8px;
		background-color: rgba(0, 0, 0, .5);
		color: white;
		text-align: center;
		border-radius: 13px;
		font-size: 12px;
	}
	
	.contFirstTopRi a {
		color: white;
	}
	
	#contFirstTopRiIcon {
		font-size: 20px;
	}
	
	.contFirstMid {
		margin: 40px 0;
		width: 100%;
		text-align: center;
		color: white;
		font-size: 22px;
	}
	
	.contFirstBot {
		margin-top: 64px;
		margin-bottom: 8px;
		border-radius: 2px;
		background-color: white;
	}
	
	.contFirstBot input {
		width: 90%;
		line-height: 34px;
		margin-left: 10px;
		border: none;
		outline: none;
	}
	
	#search {
		padding: 7px 0 6px 6px;
		color: grey;
	}
	/*contSecond*/
	
	.contSecond {
		padding: 10px 15px 20px 15px;
		border-bottom: 0.1px solid gainsboro;
		text-align: center;
	}
	
	.contSecond ul li {
		width: 25%;
		float: left;
		margin-top: 10px;
		padding: 0 2px;
	}
	
	.contSecond ul li img {
		width: 56%;
		margin-bottom: 6px;
	}
	
	.contSecond ul li p {
		font-size: 14px;
		margin-top: 4px;
	}
	
	.contSecond a,
	.contThird a {
		color: #000;
	}
	/*contThird*/
	
	.contThird {
		margin-top: 12px;
		padding: 15px 20px 20px 20px;
		font-size: 14px;
		border-top: 0.1px solid gainsboro;
		border-bottom: 0.1px solid gainsboro;
	}
	
	.contThird .contThirdDe {
		padding-bottom: 18px;
		border-bottom: 1px solid gainsboro;
	}
	
	.contThirdDe h4 {
		color: #333;
		font-size: 16px;
	}
	
	.contThirdImg li {
		text-align: center;
		width: 20%;
		float: left;
		margin-top: 16px;
		margin-bottom: 4px;
	}
	
	.contThirdImg li img {
		width: 32%;
		margin-bottom: 4px;
	}
	/*contFour*/
	
	.contFour {
		margin-top: 12px;
		padding: 10px 20px;
		font-size: 14px;
		border-top: 0.1px solid gainsboro;
	}
	
	.contFour .contThirdDe .contFourRi span {
		font-size: 12px;
		margin-left: 14px;
	}
	
	.contFour .contThirdDe {
		border-bottom: 1px solid gainsboro;
		padding: 8px 0px 14px;
	}
	/*tab*/
	
	.contFour .mint-navbar .mint-tab-item.is-selected {
		border-bottom: none;
		color: #00ae65;
	}
	
	.contFour .mint-navbar .mint-tab-item {
		padding: 6px 0;
		color: #9fa3a5;
	}
	
	.commonList {
		border-bottom: 1px solid gainsboro;
	}
	
	.newHouse {
		width: calc(100% - 100px - 4%);
		font-size: 12px;
		margin: 20px 0;
	}
	
	.newHouseTop h3 {
		font-size: 16px;
		font-weight: 500;
		color: #394043;
		margin-bottom: 4px;
	}
	
	.newHouseTop span {
		margin-left: 3%;
		background-color: #f0f1f1;
		padding: 0 2px;
		border-radius: 2px;
		margin-top: 3px;
	}
	
	.newHouseTopLife {
		color: #fb9252;
	}
	
	.newHouseTopSale {
		color: #55cd9b;
	}
	
	.newHouse p {
		margin-bottom: 5px;
		color: #7c8082;
	}
	
	.newHouseSign {
		overflow: hidden;
		margin-bottom: 2px;
	}
	
	.newHouseSign li {
		padding: 0 1px;
		font-size: 12px;
		border: 1px solid #e5e5e5;
		color: #9c9fa1;
		border-radius: 2px;
		margin-right: 2%;
	}
	
	.rentHouse {
		width: calc(100% - 100px - 4%);
		font-size: 12px;
		margin: 20px 0;
	}
	
	.rentHouse h3 {
		font-size: 16px;
		font-weight: 500;
		color: #394043;
		margin-bottom: 4px;
	}
	
	.rentHouse p {
		margin-top: 3px;
		margin-bottom: 20px;
		color: #7c8082;
	}
	
	.more {
		width: 100%;
		margin-top: 10px;
		padding: 15px 0;
		text-align: center;
		font-size: 16px;
		font-weight: 600;
		background-color: #f9f9f9;
	}
	
	.more a {
		color: #00ae65;
	}
</style>