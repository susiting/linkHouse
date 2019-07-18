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
			<span>中海联睿品</span></p>
		</div>
		<section class="newSwipe">
		      <swiper :options="swiperOption">
		        <swiper-slide><img src="../../assets/home/newbg1.jpg"/></swiper-slide>
		        <swiper-slide><img src="../../assets/home/newbg2.jpg"/></swiper-slide>
		        <swiper-slide><img src="../../assets/home/newbg3.jpg"/></swiper-slide>
		        <div class="swiper-pagination" slot="pagination"></div>
		      </swiper>
		</section>
		<section class="newIcon c">
			<ul>
				<li><img src="../../assets/home/newIcon1.png"/><p>全部楼盘</p>
				</li>
				<li><img src="../../assets/home/newIcon2.png"/><p>在售楼盘</p>
				</li>
				<li><img src="../../assets/home/newIcon3.png"/><p>最近开盘</p>
				</li>
				<li><img src="../../assets/home/newIcon4.png"/><p>两居优选</p>
				</li>
				<li><img src="../../assets/home/newIcon5.png"/><p>旅居</p>
				</li>
			</ul>
		</section>
		<section class="newList c">
			<ul>
				<li><span>区域</span><i class="iconfont">&#xe756;</i></li>
				<li><span>价格</span><i class="iconfont">&#xe756;</i></li>
				<li><span>房型</span><i class="iconfont">&#xe756;</i></li>
				<li><span>更多</span><i class="iconfont">&#xe756;</i></li>
				<li><img src="../../assets/home/../../assets/home/change.png"/></li>
			</ul>
		</section>
		<section class="newHouseList c">
			<ul class="contFourUsed c resoldConts">
			   		<li class="c commonList" v-for="(item,index) in newList" >
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
	</main>
</template>

<script>
	export default {
    data() {
      return {
      	newList:[],
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
				_this.newList=res.data.newList
			})
			.catch(()=>{
				
			})
			.finally((f)=>{
			})
			 var oNewList = document.getElementsByClassName('newList')[0];
			document.onscroll = function(){
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				if(scrollTop>oNewList.offsetTop){
					oNewList.style.position = "fixed"
				}else{
					oNewList.style.position = ""
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
	    border: 0.5px #e8e8e9 solid;
	    border-radius: 15px;
	}
	.newSearch p{
		padding: 6px;
		color: #9C9FA1;
	}
	.newSearch i{
		font-size: 12px;
	}
	/*newSwipe*/
	.newSwipe{
		margin-top: 20px;
		margin-left: 7%;
	}
	.newSwipe img{
		width: 90%;
		border-radius: 10px;
	}
	.swiper-pagination-bullet-active {
    background: white;
    }
    /*newIcon*/
   .newIcon{
   		padding: 20px;
   		text-align: center;
   		font-size: 13px;
   		border-bottom: 0.1px solid gainsboro;
   }
   .newIcon ul li{
   	width: 20%;
   	float: left;
   }
    .newIcon ul li img{
    	width: 30px;
    	margin-bottom: 4px;
    }
    /*newList*/
   .newList{
   	padding: 15px 20px;
   	text-align: center;
   	font-size: 14px;
   	color: #394043;
   	top: 0;
   	left: 0;
   	z-index: 10;
   	background-color: #fff;
   }
   .newList ul li{
   	width: 22%;
   	float: left;
   }
   .newList ul li:nth-child(5){
   	width: 10%;
   }
   .newList ul li img{
   	width: 16px;
   	margin-bottom: 4px;
   }
   .newList ul li i{
   	font-size: 12px;
   	padding: 0 2px;
   	color: gray;
   }
   /*newHouseList*/
  .newHouseList{
  	padding: 0 20px;
  	padding-bottom: 400px;
  }
  .commonList{
  	border-bottom: 1px solid gainsboro;
  }
</style>