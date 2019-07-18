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

		<section class="detailSwiper">
			<swiper :options="swiperOption">
				<swiper-slide><img src="../../assets/home/detail3.jpg" /></swiper-slide>
				<swiper-slide><img src="../../assets/home/detail2.jpg" /></swiper-slide>
				<swiper-slide><img src="../../assets/home/detail4.jpg" /></swiper-slide>
				<swiper-slide><img src="../../assets/home/detail5.jpg" /></swiper-slide>
				<swiper-slide><img src="../../assets/home/detail6.jpg" /></swiper-slide>
				<swiper-slide><img src="../../assets/home/detail7.jpg" /></swiper-slide>
				<swiper-slide><img src="../../assets/home/detail8.jpg" /></swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</section>
		<section class="detailCont1 c">
			<h3>中海誉城南苑二房满二年 中间楼层</h3>
		</section>
		<section class="detailCont2 c">
			<div class="c">
				<div class="detailCont2Top l c">
					<p>售价</p>
					<p>198万元</p>
				</div>
				<div class="detailCont2Top l">
					<p>房型</p>
					<p>2室2厅</p>
				</div>
				<div class="detailCont2Top l">
					<p>建筑面积</p>
					<p>71平</p>
				</div>
			</div>
			<div class="detailCont2Bot">
				<img src="../../assets/home/detailLook.png" class="l" />
				<span class="l">诚心卖，省心买</span>
				<i class="iconfont r">&#xe631;</i>
			</div>
		</section>

		<section class="detailCont3 c">
			<div class="detailHead c">
				<img src="../../assets/home/homelogo.png" class="l" />
				<p class="l">打开链家APP,在线咨询经纪人</p>
				<i class="iconfont r">&#xe631;</i>
			</div>
		</section>
		<section class="detailCont4 c">
			<ul class="detailCont4Look">
				<li class="l">必看好房</li>
				<li class="l">VR房源</li>
				<li class="l">满两年</li>
				<li class="l">有电梯</li>
			</ul>
			<ul class="detailCont4bot">
				<li>
					<span>单位：</span>
					<span>27,888元/平</span>
				</li>
				<li>
					<span>挂牌：</span>
					<span>2019.06.27</span>
				</li>
				<li>
					<span>朝向：</span>
					<span>北</span>
				</li>
				<li>
					<span>楼层：</span>
					<span>中楼层/33</span>
				</li>
				<li>
					<span>楼型：</span>
					<span>塔楼</span>
				</li>
				<li>
					<span>电梯：</span>
					<span>有电梯</span>
				</li>
				<li>
					<span>装修：</span>
					<span>简装</span>
				</li>
				<li>
					<span>年代：</span>
					<span>2015年</span>
				</li>
				<li>
					<span>用途：</span>
					<span>普通住宅</span>
				</li>
				<li>
					<span>权属：</span>
					<span>商品房</span>
				</li>
			</ul>
			<div class="c">
				<p class="budget">首付预算：
					<span>总首付73万，月供6620元</span>
					<i class="iconfont r">&#xe631;</i>
				</p>
				<p class="budget">小区：
					<span>中海誉城南苑</span>
					<i class="iconfont r">&#xe631;</i>
				</p>
			</div>
			<div class="cup">
				<img src="../../assets/home/cup.png" />
				<span>所在小区入选香雪成交小区榜第4名</span>
				<i class="iconfont r">&#xe631;</i>
			</div>
			<h4>推荐经纪人</h4>
			<ul class="agent">
				<li class="c agentLi">
					<img src="../../assets/home/agent1.jpg" class="l" />
					<p class="l zhang">
						<span>张道忠</span>
						<span>置家</span>
						<i class="iconfont r">&#xe657;</i>
					</p>
					<i class="iconfont r">&#xe6db;</i>
					<i class="iconfont r">&#xe669;</i>
					<p class="l evaluate">8评价/4.9分</p>
					<p class="l major">专业挑选好房，用心为您讲解房源亮点</p>
				</li>
				<li class="c agentLi">
					<img src="../../assets/home/agent2.jpg" class="l" />
					<p class="l zhang">
						<span>郑树超</span>
						<span>置家</span>
						<i class="iconfont r">&#xe657;</i>
					</p>
					<i class="iconfont r">&#xe6db;</i>
					<i class="iconfont r">&#xe669;</i>
					<p class="l evaluate">7评价/5.0分</p>
					<p class="l major">专业挑选好房，用心为您讲解房源亮点</p>
				</li>
				<li class="c agentLi">
					<img src="../../assets/home/agent3.jpg" class="l" />
					<p class="l zhang">
						<span>吴清清</span>
						<span>置家</span>
						<i class="iconfont r">&#xe657;</i>
					</p>
					<i class="iconfont r">&#xe6db;</i>
					<i class="iconfont r">&#xe669;</i>
					<p class="l evaluate">15评价/4.8分</p>
					<p class="l major">专业挑选好房，用心为您讲解房源亮点</p>
				</li>
			</ul>
			<div class="detailType c">
				<div class="detailTypeLe l">
					<h3>户型分间</h3>
					<p>客厅: 20.15平/北/普通窗</p>
					<p>卧室A: 11.41平/北/落地窗</p>
					<p>卧室B: 8.16平/暂无数据</p>
				</div>
				<img src="../../assets/home/type.jpg" class="r" />
			</div>
			<p class="detailMore">更多房源信息</p>
		</section>

		<section class="detailCont5 c">
			<img src="../../assets/home/mage.png" />
		</section>
		<section class="detailCont6 c">
			<p>房源介绍
				<i class="iconfont r">&#xe631;</i></p>
			<p>业主里面自己有游泳池，环山跑道。外面有中国银行，西门钱大妈生鲜超市，南苑北门有菜市场。这套房子房产证满两年，客户首套房子一个点契税，一个点个税，总共2个点税费。这套房子在小区南门进去150米，二房二厅，.....</p>
		</section>
		<section class="detailCont7 c">
			<div class="c">
				<div class="l">
					<h3>店主自荐</h3>
					<p class="renew">更新时间:2019.07.10</p>
				</div>
				<i class="iconfont r detailAgent">&#xe657;</i></p>
			</div>
			<p>房子中高楼层，金牌户型，是无浪费一点儿面积，房间客厅厨房方方正正。中高楼层视野开阔，通风采光好，一面朝东，冬暖夏凉，一面朝北。看花园，非常安静，空气好，住起来非常舒服，夏天客厅基本不用开空调，不用装...</p>
			<ul class="detailEvaluate c">
				<li>
					<img src="../../assets/home/detailBot1.jpg" />
				</li>
				<li>
					<img src="../../assets/home/detailBot2.jpg" />
				</li>
				<li>
					<img src="../../assets/home/detailBot3.jpg" />
				</li>
				<li>
					<img src="../../assets/home/detailBot4.jpg" />
				</li>
				<li>
					<img src="../../assets/home/detailBot5.jpg" />
				</li>
			</ul>
			<div class="c detailFeedback">
				<h3 class="l">经纪人带看反馈(2)</h3>
				<span class="r">查看更多
				<i class="iconfont r">&#xe631;</i></p>
			</span>
				<div class="c agent">
					<div class="agentLi c">
						<img src="../../assets/home/agent4.jpg" class="l" />
						<p class="l zhang">
							<span>陈志坤</span>
							<span>置家</span>
							<i class="iconfont r">&#xe657;</i>
						</p>
						<i class="iconfont r">&#xe6db;</i>
						<i class="iconfont r">&#xe669;</i>
						<p class="l evaluate">带看8次 2019.07.14带看过</p>

					</div>

				</div>
				<p class="detailFeel">带看感受：客户对房子的户型和朝向比较满意，阳台朝南，主卧室朝南，次卧窗朝东，......</p>
			</div>

		</section>
		<section class="detailCont8 c">
			<h3>房源动态</h3>
			<p class="dynamic1 c">
				<span>近7日带看(次)</span>
				<span>30日带看(次)</span>
				<span>关注(人)</span>
			</p>
			<p class="dynamic2 c">
				<span>20</span>
				<span>69</span>
				<span>47</span>
			</p>
			<p class="dynamic3 c">使用APP查看详细带看记录和更多动态信息</p>
			<div class="detailBox">打开链接APP</div>
		</section>

		<section class="detailCont9">
			<div class="c detailTop">
				<h3 class="l">中海誉城南苑</h3>
				<i class="iconfont r">&#xe631;</i></p>
				<span class="r">小区详情</span>
			</div>
			<div class="detailType c">
				<div class="detailTypeLe l">
					<h3>参考均价：<span>26,342元/平</span></h3>
					<p>建筑年代: 2014年建</p>
					<p>栋数总数: 50栋</p>
					<p>房屋总数: 2975户</p>
				</div>
				<img src="../../assets/home/build.jpg" class="r" />
			</div>
			<div class="c detailBot">
				<h3 class="l">同小区成交(32)</h3>
				<i class="iconfont r">&#xe631;</i></p>
				<span class="r">APP中查看</span>
			</div>
			<p class="detailCont9P1 c"><span class="l">2室1厅/77.34平/东南</span>
				<span class="r">218万</span>
			</p>
			<p class="detailCont9P2 c">2019.06.03成交</p>
		</section>
		<section class="detailCont10 c">
			<p>考虑卖房？我们可以帮到您</p>
			<p>30万业主信赖的选择，卖房专业又省心</p>
			<p>帮我卖房</p>
			<p>房源所示“户型图、房屋用途、交易权属、建成年代、产权年限、建筑结构”仅供参考，购房时请以房本信息为准。</p>
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
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						type: 'fraction'
					}
				}
			}
		},
		mounted() {
			var oDetailCont3 = document.getElementsByClassName('detailCont3')[0];
			document.onscroll = function() {
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				if(scrollTop > 249) {
					oDetailCont3.style.position = "fixed"
				} else {
					oDetailCont3.style.position = "static"

				}
			}
		}
	}
</script>

<style scoped>
	.detailCont3 {
		padding: 0 20px;
		top: 0;
		left: 0;
	}
	
	.detailCont3 .detailHead {
		padding: 12px 0;
		border-top: 0.5px solid #e5e5e5;
		border-bottom: 0.5px solid #e5e5e5;
		background: #fff;
	}
	
	.detailHead img {
		width: 30px;
	}
	
	.detailHead p {
		color: #394043;
		font-size: 15px;
		margin-left: 2%;
		padding: 4px;
	}
	
	.detailHead i {
		color: #9c9fa1;
		font-size: 12px;
		padding: 6px 0;
	}
	/*detailSwiper*/
	
	.detailSwiper img {
		width: 100%;
	}
	
	.detailSwiper .swiper-pagination-fraction,
	.swiper-pagination-custom,
	.swiper-container-horizontal>.swiper-pagination-bullets {
		width: 10%;
		padding: 3px;
		color: white;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, .5);
		font-size: 10px;
		left: 85%;
	}
	/*detailCont1*/
	
	.detailCont1 {
		padding: 20px;
	}
	
	.detailCont1 h3 {
		font-size: 26px;
		padding-bottom: 20px;
		color: #394043;
		border-bottom: 1px solid #e5e5e5;
	}
	/*detailCont2*/
	
	.detailCont2 {
		padding: 0 20px;
	}
	
	.detailCont2Top {
		width: 33%;
		color: #9c9fa1;
		border-right: 0.5px solid #e5e5e5;
	}
	
	.detailCont2Top:nth-child(3) {
		border-right: none;
	}
	
	.detailCont2Top p:nth-child(1) {
		font-size: 14px;
	}
	
	.detailCont2Top p:nth-child(2) {
		font-size: 16px;
		color: #FA5741;
		font-weight: bolder;
		padding-top: 4px;
	}
	
	.detailCont2Bot {
		overflow: hidden;
		margin: 15px 0;
		padding: 6px;
		background-image: url(../../assets/home/detailLookbgi.png);
		margin-bottom: 10px;
	}
	
	.detailCont2Bot img {
		width: 17%;
		margin-top: 2px;
		margin-right: 2%;
	}
	
	.detailCont2Bot i {
		color: #edd6a4;
		font-size: 10px;
		margin-top: 3px;
	}
	/*detailCont4*/
	
	.detailCont4 {
		padding: 20px 20px 0;
	}
	
	.detailCont4Look li {
		text-align: center;
		padding: 0 3px;
		border-radius: 2px;
		margin-right: 3%;
		font-size: 11px;
	}
	
	.detailCont4Look li:nth-child(1) {
		background-color: #7ca0fa;
		color: white;
	}
	
	.detailCont4Look li:nth-child(2) {
		background-color: #fdf1e0;
		color: #f5b458;
	}
	
	.detailCont4Look li:nth-child(3) {
		background-color: #e1f5ed;
		color: #33be85;
	}
	
	.detailCont4Look li:nth-child(4) {
		background-color: #ebf5ff;
		color: #7bbdff;
	}
	
	.detailCont4bot li {
		float: left;
		width: 50%;
		padding: 8px 0;
		font-size: 16px;
	}
	
	.detailCont4bot li span:nth-child(1) {
		color: #9c9fa1;
	}
	
	.detailCont4bot li span:nth-child(2) {
		color: #394043;
	}
	
	.budget {
		color: #9c9fa1;
		font-size: 16px;
		padding: 8px 0;
	}
	
	.budget span {
		color: #5680a6;
	}
	
	.budget i {
		font-size: 12px;
		padding: 5px 0;
	}
	
	.cup {
		background-image: url(../../assets/home/detailLookbgi.png);
		padding: 6px 10px;
	}
	
	.cup img {
		width: 25px;
	}
	
	.cup span {
		margin-top: 2px;
		color: #b18037;
		font-size: 14px;
	}
	
	.cup i {
		color: #9c9fa1;
		font-size: 12px;
		padding: 5px 0;
	}
	
	.detailCont4>h4 {
		font-size: 16px;
		color: #394043;
		margin-top: 15px;
		margin-bottom: 15px;
	}
	
	.agent .agentLi {
		padding-bottom: 20px;
	}
	
	.agent .agentLi img {
		width: 40px;
		border-radius: 50%;
	}
	
	.agent .agentLi .zhang {
		padding: 5px 15px;
	}
	
	.agent .agentLi .zhang span:nth-child(1) {
		font-size: 16px;
	}
	
	.agent .agentLi .zhang span:nth-child(2) {
		font-size: 11px;
		color: #9399a5;
		padding: 0 2px;
		margin-left: 2px;
		background-color: #eff0f2;
		margin-right: 2px;
	}
	
	.agent .agentLi .zhang i {
		padding: 3px 4px;
		color: #9399a5;
	}
	
	.agent .agentLi>i {
		padding: 3px 2px;
		color: #00AE66;
		font-size: 34px;
		margin-left: 5%;
	}
	
	.evaluate {
		margin-left: 15px;
		color: #394043;
	}
	
	.major {
		margin-top: 5px;
		margin-left: 16%;
		color: #b1b1b1;
	}
	
	.detailTypeLe h3 {
		font-size: 16px;
		font-weight: 500;
		color: #394043;
		margin-bottom: 12px;
	}
	
	.detailTypeLe p {
		font-size: 13px;
		color: #9C9FA1;
	}
	
	.detailType {
		padding-top: 15px;
		border-top: 0.1px solid #e5e5e5;
	}
	
	.detailType img {
		width: 100px;
		margin-top: 10px;
	}
	
	.detailMore {
		margin-top: 25px;
		padding: 13px 0;
		overflow: hidden;
		text-align: center;
		color: #5680a6;
		font-size: 16px;
		font-weight: bold;
		background-color: #f9f9f9;
	}
	
	.detailCont5 {
		margin-top: 20px;
	}
	
	.detailCont5 img {
		width: 100%;
	}
	
	.detailCont6 {
		padding: 20px 20px 0;
	}
	
	.detailCont6 p:nth-child(1) {
		font-size: 20px;
		color: #394043;
		font-weight: bold;
		margin-bottom: 20px;
	}
	
	.detailCont6 p:nth-child(2) {
		font-size: 16px;
		color: #000;
		padding-bottom: 20px;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.detailCont6 i {
		padding: 4px;
		color: #9399a5;
		font-size: 12px;
	}
	
	.detailCont7 {
		padding: 20px 20px 0;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.detailCont7 h3 {
		font-size: 16px;
		color: #394043;
	}
	
	.renew {
		font-size: 11px;
		margin-top: 2px;
		color: #9c9fa1;
	}
	
	.detailAgent {
		color: #9399a5;
		font-size: 36px;
	}
	
	.detailCont7>p {
		font-size: 16px;
		color: #394043;
		margin-top: 15px;
	}
	
	.detailEvaluate {
		margin-top: 20px;
		padding-bottom: 20px;
		border-bottom: 0.5px solid #e5e5e5;
	}
	
	.detailEvaluate li img {
		float: left;
		width: 16%;
		margin-right: 4%;
	}
	
	.detailFeedback {
		padding-top: 15px;
	}
	
	.detailFeedback span {
		padding: 1px 0;
		color: #9C9FA1;
	}
	
	.detailFeedback i {
		padding-top: 3px;
		margin-left: 2px;
		color: #9C9FA1;
		font-size: 10px;
	}
	
	.detailFeedback .evaluate {
		color: #9c9fa1;
		font-size: 11px;
	}
	
	.detailFeel {
		font-size: 16px;
		color: #394043;
		margin-bottom: 20px;
	}
	
	.detailCont8 {
		padding: 20px;
		margin-top: 12px;
		border-bottom: 1px solid #e5e5e5;
		border-top: 1px solid #e5e5e5;
	}
	
	.detailCont8 h3 {
		font-size: 18px;
		color: #394043;
		margin-bottom: 12px;
	}
	
	.dynamic1 span {
		width: 33%;
		color: #9c9fa1;
		margin-right: 15%;
	}
	
	.dynamic2 {
		padding-bottom: 30px;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.dynamic2 span {
		width: 33%;
		color: #333;
		font-size: 24px;
		font-weight: 400;
		margin-right: 30%;
	}
	
	.dynamic3 {
		width: 100%;
		padding: 20px 15px;
		color: #394043;
		font-size: 16px;
	}
	
	.detailBox {
		width: 60%;
		padding: 8px 30px;
		border: 1px solid #00a75b;
		border-radius: 4px;
		color: #00a75b;
		font-size: 16px;
		text-align: center;
		margin-left: 20%;
	}
	
	.detailCont9 {
		padding: 25px 20px;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.detailTop h3 {
		font-size: 20px;
		color: #394043;
	}
	
	.detailTop i {
		color: #9c9fa1;
		padding: 5px 0 2px 2px;
		font-size: 10px;
	}
	
	.detailTop span {
		color: #9c9fa1;
		padding: 2px 4px;
		font-size: 12px;
	}
	
	.detailCont9 .detailType {
		border-top: none;
		padding-bottom: 20px;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.detailCont9 .detailType .detailTypeLe p {
		margin-top: 3px;
	}
	
	.detailCont9 .detailType .detailTypeLe h3 {
		font-weight: bold;
	}
	
	.detailCont9 .detailType .detailTypeLe h3 span {
		color: #fa5741;
	}
	
	.detailBot {
		padding: 25px 0;
	}
	
	.detailBot h3 {
		font-size: 16px;
		color: #394043;
	}
	
	.detailBot span {
		padding: 2px 4px;
		font-size: 12px;
		color: #00a75b;
	}
	
	.detailBot i {
		color: #9c9fa1;
		padding: 5px 0 2px 2px;
		font-size: 10px;
	}
	
	.detailCont9>p:nth-child(1) {
		font-size: 16px;
		color: #394043;
	}
	
	.detailCont9P1 {
		padding-left: 20px;
		font-size: 16px;
		color: #394043;
	}
	
	.detailCont9P1 span:nth-child(2) {
		color: #fa5741;
		font-weight: bold;
	}
	
	.detailCont9P2 {
		padding-left: 20px;
		font-size: 13px;
		color: #9C9FA1;
	}
	/*detailCont10*/
	
	.detailCont10 {
		padding-top: 30px;
		text-align: center;
		padding-bottom: 20px;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.detailCont10 p:nth-child(1) {
		font-size: 20px;
		color: #394043;
	}
	
	.detailCont10 p:nth-child(2) {
		font-size: 12px;
		color: #9c9fa1;
		margin-top: 3px;
	}
	
	.detailCont10 p:nth-child(3) {
		width: 40%;
		font-size: 16px;
		color: #394043;
		margin: 15px 0;
		margin-left: 30%;
		padding: 10px 20px;
		border: 1px solid #9c9fa1;
		border-radius: 20px;
	}
	
	.detailCont10 p:nth-child(4) {
		padding: 0 20px;
		font-size: 10px;
		color: #cdcfd0;
		margin-top: 3px;
	}
</style>