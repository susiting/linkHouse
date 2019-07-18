<template>
	<main>
		<header class="linkHouse c">
			<p class="headreturn l">
				<router-link to="/" >
					<mt-button icon="back"></mt-button>
				</router-link>
			</p>
			<p class="headlocal l">
				广州
				<i class="iconfont" id="iconDrop">&#xe756;</i>
			</p>
			<div class="headImg l">
				<router-link to="/home" >
					<img src="../../assets/home/logo.png"/>
				</router-link>
			</div>
			<div class="headRight r">
				<i class="iconfont" id="person">&#xe706;</i>
			</div>
		</header>
		<div class="newSearch c">
			<p><i class="iconfont">&#xe638;</i>
			<span>请输入小区/商圈/地铁</span></p>
		</div>
		<section class="newList c">
			<ul>
				<li><span>区域</span><i class="iconfont">&#xe756;</i></li>
				<li><span>方式</span><i class="iconfont">&#xe756;</i></li>
				<li><span>租金</span><i class="iconfont">&#xe756;</i></li>
				<li><span>筛选</span><i class="iconfont">&#xe756;</i></li>
			</ul>
		</section>
		<section class="newHouseList c">
			<ul class="contFourUsed c resoldConts">
			   		<li class="c commonList" v-for="(item,index) in rentList" >
			   			<router-link to="/detail">
			   			<img :src="item.src" class="l"/>
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
		<section class="rentHouseOpen">
			<p>用链家APP，参看更多优质房源</p>
			<p>立即打开</p>
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
				<img src="../../assets/home/footer.png" class="l footerBotLe"/>
				<img src="../../assets/home/footer1.png" class="r footerBotRi"/>
			</div>
 			</div>
			
 		</footer>
	</main>
</template>

<script>
	export default {
    data() {
      return {
      	active:"4",
      	rentList:[],
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    mounted(){
			var _this=this;
			this.$http.get('./data/data.json')
			.then(function(res){
				_this.rentList=res.data.rentList
			})
			.catch(()=>{
				
			})
			.finally((f)=>{
			})
			 var oNewList = document.getElementsByClassName('newList')[0];
			document.onscroll = function(){
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				if(scrollTop>93){
					oNewList.style.position = "fixed"
				}else{
					oNewList.style.position = "static"
				}
			}
		}
  }
</script>

<style scoped>
	.newSearch{
		margin-top: 20px;
		text-align: center;
		width: 90%;
		margin-left: 5%;
	    color: #ccc;;
	    border-radius: 15px;
	    background-color: #f5f5f5;
	}
	.newSearch p{
		padding: 8px;
	}
	.newSearch i{
		font-size: 12px;
	}
    /*newList*/
   .newList{
   	padding:10px 0;
   	text-align: center;
   	font-size: 14px;
   	color: #394043;
   	border-bottom: 0.8px solid #e4e6f0;
   	top: 0;
   	left: 0;
   	background-color: #fff;
   }
   .newList ul li{
   	width: 25%;
   	float: left;
   }
   .newList ul li:nth-child(5){
   	width: 10%;
   }
   .newList ul li i{
   	font-size: 12px;
   	padding: 0 2px;
   	color: gray;
   }
   /*newHouseList*/
  .newHouseList{
  	padding: 0 20px;
  	
  }
  .commonList{
  	padding-bottom: 18px;
  	border-bottom: 1px solid #e4e6f0;
  }
  .rentHouseOpen{
  	padding: 40px 0;
  	text-align: center;
  }
  .rentHouseOpen p:nth-child(1){
  	font-size:16px;
  	color: #666;
  	font-weight: bold;
  }
  .rentHouseOpen p:nth-child(2){
  	width: 20%;
  	padding: 5px 0;
  	border: 1px solid #00ae66;
    color: #00ae66;
    border-radius:2px ;
    margin-left: 40%;
    margin-top: 15px;
  }
</style>