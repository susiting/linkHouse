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
		<nav class="part_swipe">
			<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  	<img src="../../assets/home/reBg1.jpg" />
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/home/reBg2.jpg"/>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/home/reBg3.jpg"/>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/home/reBg4.jpg"/>
			  </mt-swipe-item>
			</mt-swipe>
			
			<p class="resoldSearchInput c">
					<i class="iconfont l" id="resoldSearch">&#xe638;</i>
				<input type="text" placeholder="请输入小区或者商圈名~" class="l"/>				
			</input>
			</p>
		</nav>
		
		<section class="c resoldSwipe">
			<h4>为您推荐</h4>
			  
			      <swiper :options="swiperOption">
			        <swiper-slide >
			        	<div class="mark">
			        		<img src="../../assets/home/resold1.jpg"/>
			        	</div>
			        	<h3 class="markH1">省级小学就在附近</h3>
			        	<p class="markP1">越秀小户型138万起</p>
			        </swiper-slide>
			        <swiper-slide >
			        	<div class="mark">
			        		<img src="../../assets/home/resold2.jpg"/>
			        	</div>
			        	<h3 class="markH2">精修电梯三房</h3>
			        	<p class="markP2">236万起选!</p>
			        </swiper-slide>
			        <swiper-slide>
			        	<div class="markLast">
			        		<img src="../../assets/home/resold3.jpg"/>
			        	</div>
			        	<h3 class="markH3">一步到位住三房</h3>
			        	<p class="markP3">近地铁188万起</p>
			        </swiper-slide>
			        <div class="swiper-pagination" slot="pagination"></div>
			      </swiper>
		</section>
  		
  		<section class="c resoldCont">
  			<div class="resoldContHead c">
  				<p @click="toShow(0)" :class="{selected:reIndex==0}">
  					<span>区域</span>
  				<i class="iconfont">&#xe756;</i>
  				</p>
  				<p @click="toShow(1)" :class="{selected:reIndex==1}"><span>价格</span>
  				<i class="iconfont">&#xe756;</i>
  				</p>
  				<p @click="toShow(2)" :class="{selected:reIndex==2}"><span>房型</span>
  				<i class="iconfont">&#xe756;</i>
  				</p>
  				<p @click="toShow(3)" :class="{selected:reIndex==3}"><span>更多</span>
  				<i class="iconfont">&#xe756;</i>
  				</p>
  			</div>	
  			<ul class="contFourUsed c resoldConts">
			   		<li v-for="(item,index) in list" class="c commonList">
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
				<img src="../../assets/home/footer.png" class="l footerBotLe"/>
				<img src="../../assets/home/footer1.png" class="r footerBotRi"/>
			</div>
 			</div>
			
 		</footer>
	<transition name="fade">
			

	<section class="c resoldCont resoldType" id="resoldtype">
		<div class="resoldTypeFrist" v-show="reIndex==0">
			<div class="l resoldPosition">
				<p :class="{REsoldActive:num==0}" @click="change()">区域</p>
				<p :class="{REsoldActive:num==1}" @click="changeSe()">地铁</p>
			</div>
				
				<ul class="r resoldSubway" v-show="num==0">
					<li>不限</li>
					<li>天河</li>
					<li>越秀</li>
					<li>荔湾</li>
					<li>海珠</li>
					<li>番禺</li>
					<li>白云</li>
					<li>黄埔</li>
					<li>从化</li>
					<li>增城</li>
					<li>花都</li>
					<li>南沙</li>
					<li>南海</li>
					<li>顺德</li>
				</ul>
				<ul class="r resoldSubway" v-show="num==1">
					<li>不限</li>
					<li>1号线</li>
					<li>2号线</li>
					<li>3号线</li>
					<li>3号线北延段</li>
					<li>4号线</li>
					<li>5号线</li>
					<li>6号线</li>
					<li>7号线</li>
					<li>8号线</li>
					<li>APM线</li>
					<li>9号线</li>
					<li>13号线</li>
					<li>14号线</li>
					<li>知识城线</li>
					<li>21号线</li>
					<li>广佛线</li>
				</ul>
			
		</div>
		<div class="resoldTypeSecond" v-show="reIndex==1">
			<p>100万以下</p>
			<p>100-120万以下</p>
			<p>120-150万以下</p>
			<p>150-200万以下</p>
			<p>200-300万以下</p>
			<p>300-500万以下</p>
			<p>500万以下</p>
			<p>自定义价格 <span>最小</span>-<span>最大</span> <span>确定</span></p>
		</div>
		<div class="resoldTypeThird c" v-show="reIndex==2">
			<mt-radio
			  align="right"
			  v-model="value"
			  :options="['一室', '二室', '三室','四室','五室','五室以上']">
			</mt-radio>
			<p>确定</p>
		</div>
		<div class="resoldTypeFour" v-show="reIndex==3">
			<p>默认排序</p>
			<p>单价从低到高</p>
			<p>单价从高到低</p>
			<p>开盘时间顺序</p>
			<p>开盘时间倒序</p>
		</div>
  	</section>
	</transition>
	
	
	</main>
	
</template>

<script>
	export default {
	    data() {
	      return {
	      	value:'一室',
	      	num:0,
	      	reIndex:10,
	      	list:[],
	      	active:"4",
	        swiperOption: {
	          slidesPerView: 'auto',
	          centeredSlides: true,
	          spaceBetween: 30,
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
				_this.list=res.data.list
			})
			.catch(()=>{
			})
			.finally((f)=>{
			})
			var oResoldContHead = document.getElementsByClassName('resoldContHead')[0];
			document.onscroll = function(){
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				if(scrollTop>oResoldContHead.offsetTop){
					oResoldContHead.style.position = "fixed"
				}else{
					oResoldContHead.style.position = ""
				}
			}
			 
		},
		methods:{
	    	change(){
	    		this.num=0;
	    	},
	    	changeSe(){
	    		this.num=1;
	    	},
	    	toShow(a){
	    		if(this.reIndex==a){
	    			this.reIndex=9
	    			document.body.style.overflow="auto"
	    			resoldtype.style.height="0";
	    			resoldtype.style.backgroundColor="white";
	    		}else{
	    			this.reIndex=a
	    			document.body.style.overflow="hidden"
	    			resoldtype.style.height="calc(100% - 200px)";
	    			resoldtype.style.backgroundColor="rgba(0,0,0,0.6)";
	    		}
	    	}
	    }
  }
</script>

<style scoped>
	.part_swipe {
		 width: 100%;
		 padding-bottom: 55%;
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
		 background-color: transparent;
	}
	.resoldSearchInput{
		width:90% ;
		position: absolute;
		left: 5%;
		top: 6%;
		z-index: 2;
		border-radius: 3px;
		background-color: #fff;
		border: 0.5px #e8e8e9 solid;
	}
	.resoldSearchInput input{
		width: 90%;
		line-height: 28px;
		border: none;
		outline:none; 
		font-size: 12px;
	}
	#resoldSearch{
		font-size: 14px;
		padding: 6px 5px 4px 6px;
		color: grey;
	}
	/*轮播*/
	.resoldSwipe{
		padding-bottom: 20px;
		border-bottom: 0.1px solid gainsboro;
	}
	.resoldSwipe>h4{
		color: #9c9fa1;
		font-size: 13px;
		margin:2px 0 15px 20px;
		font-weight: 400;
	}
	.resoldSwipe .swiper-slide {
	    width: 40%;
	  }
	  .resoldSwipe .swiper-slide:nth-child(2n) {
	      width: 40%;
	  }
	  .resoldSwipe .swiper-slide:nth-child(3n) {
	      width: 20%;
	  }
	  .resoldSwipe .swiper-slide img{
	  	width:160px;
	  	opacity:0.4;
	  	
	  }
	  .resoldSwipe .swiper-container-horizontal > .swiper-pagination-bullets{
	  	display: none;
	  	position: relative;
	  }
	  .resoldSwipe .mark{
	  	width:160px;
	  	height: 100%;
	  	background-color: rgba(0,0,0,.8);
	  	z-index: 2;
	  }
	  .resoldSwipe p, .resoldSwipe h3{
	  	 position: absolute;
	  	 color: white;
	  }
	  .resoldSwipe h3{
	  	top: 30%;
	  	 font-size: 15px;
	  	 width: 82%;
	  }
	  .resoldSwipe p{
	  	width: 60%;
	  	top: 55%;
	  	 font-size: 10px;
	  }
	  .markH1{
	  	left: 12%;
	  }
	  .markP1{
	  	left: 23%;
	  }
	  .markH2{
	  	left: 20%;
	  }
	  .markP2{
	  	left: 32%;
	  }
	  
	  .markLast{
	  	width:160px;
	  	height: 100%;
	  	background-color: rgba(0,0,0,.8);
	  	z-index: 2;
	  }
	  .markH3{
	  	width: 200%!important;
	  	left: 28%;
	  }
	  .markP3{
	  	width: 100%!important;
	  	left: 50%;
	  }
	  
	  /*resoldCont*/
	 .resoldCont .resoldContHead{
	 	padding: 12px 0;
	 	border-bottom: 0.5px solid gainsboro;
	 	background-color: #FFF;
	 	top: 0;
	 	left: 0;
	 	z-index: 100;
	 }
	 .resoldCont .resoldContHead>p{
	 	width: 25%;
	 	float: left;
	 	text-align: center;
	 	font-size: 14px;
	 	color: #333333;
	 }
	 .resoldCont .resoldContHead i{
	 	color: #CCCCCC;
	 	font-size: 12px;
	 }
	 .resoldConts{
	 	padding: 10px 20px;
	 }
	 .commonList{
  	border-bottom: 1px solid gainsboro;
  }
  /*resoldType*/
 .resoldType{
 	color: #394043;
 	position: fixed;
 	top: 43px;
 	left: 0;
 	background-color: #fff;
 	z-index: 20;
 }
  	.resoldPosition{
  		width: 48%;
  		background-color: #f0f0f0;
  		font-size:14px ;
  		padding-bottom: 250px;
  	}
  	.resoldPosition p{
  		padding: 10px 0 10px 24px;
  	}
  	.resoldSubway{
  		width: 52%;
  		padding-left: 6%;
  		height: 327px;
  		overflow: auto;
  		background-color: white;
  	}
  	.resoldSubway li{
  		
  		padding: 10px 0;
  		font-size: 14px;
  		border-bottom: 0.5px solid #e5e5e5;
  	}
  	.REsoldActive{
  		background-color: #fff;
  	}
  	/*resoldTypeSecond*/
  	.resoldTypeSecond,.resoldTypeFour{
  		padding-left:20px ;
  		background-color: white;
  	}
  	.resoldTypeSecond p,.resoldTypeFour p{
  		padding:15px 0;
  		font-size: 14px;
  		border-bottom: 1px solid #e5e5e5;
  	}
  	.resoldTypeFour p{
  		font-size: 16px;
  	}
  	.resoldTypeSecond p span{
  		padding:1px 6px;
  		font-size: 10px;
  		background-color: #f5f5f5;
  		border-bottom: 0.5px solid #e5e5e5;
  		margin-left: 5%;
  	}
  	.resoldTypeSecond p span:nth-of-type(2){
  		margin-left: 0;
  	}
  	.resoldTypeSecond p span:nth-of-type(3){
  		color: white;
  		background-color: #00ae66;
  	}
  	
  	.fade-enter-active{
				animation: enter 0.2s 1 linear;
			}

	@keyframes enter{
		from{
			height: 0
		}
		to{
			height: 300px
		}
	}
	/*resoldTypeThird*/
	.resoldTypeThird{
		background-color: white;
	}
	.resoldTypeThird p{
		width: 100%;
		text-align: center;
		padding: 15px 0;
		color: white;
		background-color: #00ae66;
		font-size: 16px;
		font-weight: bold;
	}
	.selected span,.selected i{
		color: #00ae66!important;
		font-weight: bold;
	}
	
</style>

<style type="text/css">
	.mint-radio-input:checked + .mint-radio-core {
    background-color: #00ae66;
    border-color: #00ae66;
}
</style>