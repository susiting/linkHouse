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
		<section class="content c">
			<p class="contentImg">
				<img src="../../assets/home/mine_head.png" />
			</p>
			<div class="contentUser c">
				<router-link to="/login">
					<div class="contentLoginRegister l" id="contentLogin">
					登录
					</div>
				</router-link>
				<router-link to="/register">
					<div class="contentLoginRegister r" id="contentRegister">
						注册
					</div>
				</router-link>
			</div>
		</section>
		<section class="myFooter">
			<ul class="myFooterIcon" >
				<li>
					<i class="iconfont footIcon" >&#xe741;</i>
				</li>
				<li>
					<i class="iconfont footIcon" >&#xe676;</i>
				</li>
				<li>
					<i class="iconfont footIcon" >&#xe643;</i>
				</li>
				<li>
					<i class="iconfont footIcon" >&#xe602;</i>
				</li>
				<li>
					<i class="iconfont footIcon">&#xe627;</i>
				</li>
			</ul>
			<ul class="myFooterCont">
				<li class="cont">
				我关注的二手房<i class="iconfont footCont">&#xe631;</i>
				</li>
				<li class="cont">
				我关注的小区<i class="iconfont footCont">&#xe631;</i>
				</li>
				<li class="cont">
				我关注的新房<i class="iconfont footCont">&#xe631;</i>
				</li>
				<li class="cont">
				我关注的租房<i class="iconfont footCont">&#xe631;</i>
				</li>
				<li class="cont">
				免电话营销<i class="iconfont footCont">&#xe631;</i>
				</li>
			</ul>
		</section>
		<div id="homeFixed">
			<img src="../../assets/home/homefixed.png" />
 		</div>
	</main>
</template>

<script>
</script>

<style scoped>
	/*背景图*/
	.content{
		background-image: url(../../assets/home/my_head_bg.png);
		text-align: center;
	}
	.contentImg{
		width: 30%;
		margin: 0 auto;
		padding-top: 42px;
	}
	.contentImg img{
		width: 42%;
	}
	.contentUser{
		width: 50%;
		margin-top: 24px;
		position: relative;
		margin-bottom: 50px;
		text-align: center;
		left: 25%;
	}
	.contentLoginRegister{
		text-align: center;
		color: white;
		font-size: 16px;
		border: 0.1px white solid;
		padding: 8px 27px;
		
	}
	/*脚部*/
	.myFooter{
		width: 100%;
		padding-left: 15px;
		margin-bottom: 700px;
	}
	.footIcon{
		line-height: 50px;
		font-size: 24px;
	}
	.myFooterIcon{
		float: left;
		width: 6%;
	}
	.myFooterIcon li:nth-child(1){
		color: coral;
	}
	.myFooterIcon li:nth-child(2){
		color: greenyellow;
	}
	.myFooterIcon li:nth-child(3){
		color: skyblue;
	}
	.myFooterIcon li:nth-child(4){
		color: orange;
	}
	.myFooterIcon li:nth-child(5){
		color: plum;
	}
	.myFooterCont{
		width: 90%;	
		float: left;
		font-size: 14px;
		padding-left: 10px;
		line-height: 50px;
	}
	.footCont{
		float: right;
		font-size: 16px;
		color: gainsboro;
	}
	.cont{
		width: 100%;	
		float: left;
		border-bottom: 0.1px solid gainsboro;
	}
</style>