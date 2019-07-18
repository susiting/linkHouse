<template>
	<main>
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
		<nav class="plotNav c">
			<p class="resoldSearchInput c">
				<i class="iconfont l" id="resoldSearch">&#xe638;</i>
				<input type="text" placeholder="请输入小区或者商圈名~" class="l" />
				</input>
			</p>
		</nav>
		<div class="resoldContHead c">
			<p><span>区域</span>
				<i class="iconfont">&#xe756;</i>
			</p>
			<p><span>均价</span>
				<i class="iconfont">&#xe756;</i>
			</p>
			<p><span>类型</span>
				<i class="iconfont">&#xe756;</i>
			</p>
			<p><span>楼龄</span>
				<i class="iconfont">&#xe756;</i>
			</p>
		</div>
		<section class="newHouseList c">
			<ul class="contFourUsed c resoldConts">
				<li class="c commonList" v-for="(item,index) in newList">
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
		<div id="homeFixed">
			<img src="../../assets/home/homefixed.png" />
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				active: "4",
				newList: []
			}
		},
		mounted() {
			var _this = this;
			this.$http.get('./data/data.json')
				.then(function(res) {
					_this.newList = res.data.newList
				})
				.catch(() => {

				})
				.finally((f) => {})

			var oResoldContHead = document.getElementsByClassName('resoldContHead')[0];
			document.onscroll = function() {
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				if(scrollTop > 241) {
					oResoldContHead.style.position = "fixed"
				} else {
					oResoldContHead.style.position = "static"
				}
			}
		}
	}
</script>

<style scoped>
	.plotNav {
		height: 200px;
		background-image: url(../../assets/home/plotBg.jpg);
		background-size: 100%;
	}
	
	.resoldSearchInput {
		width: 80%;
		margin-top: 10px;
		margin-left: 10%;
		z-index: 2;
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
	
	.resoldContHead {
		top: 0;
		left: 0;
		padding: 12px 0;
		border-bottom: 1px solid gainsboro;
		background-color: #fff;
	}
	
	.resoldContHead>p {
		width: 25%;
		float: left;
		text-align: center;
		font-size: 14px;
		color: #333333;
	}
	
	.resoldContHead i {
		color: #CCCCCC;
		font-size: 12px;
	}
	
	.newHouseList {
		padding: 0 20px;
	}
	
	.commonList {
		border-bottom: 1px solid gainsboro;
	}
</style>