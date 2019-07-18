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
		<section class="assessCont c">
			<ul class="myFooterCont c">
				<li class="cont">
					小区<i class="iconfont footCont">&#xe631;</i><span>请选择</span>
				</li>
				<li class="cont">
					面积<span id="ping">㎡</span><input type="text" placeholder="请输入" />
				</li>
				<li class="cont">
					户型<i class="iconfont footCont">&#xe631;</i><span>请选择</span>
				</li>
				<li class="cont">
					朝向<i class="iconfont footCont">&#xe631;</i><span>请选择</span>
				</li>
				<li class="cont">
					楼层<i class="iconfont footCont">&#xe631;</i><span>请选择</span>
				</li>
			</ul>
		</section>
		<p class="assessData">链家大数据提供</p>
	</main>
</template>

<script>
	export default {};
</script>

<style scoped>
	.assessCont {
		padding: 0 20px;
	}
	
	.myFooterCont {
		width: 100%;
		float: left;
		font-size: 14px;
		padding-left: 10px;
		line-height: 55px;
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
		color: #394043;
	}
	
	.cont input {
		margin-top: 22px;
		float: right;
		width: 50px;
	}
	
	.cont i,
	.cont span {
		float: right;
		color: #babec0;
	}
	
	.cont i {
		font-size: 12px;
		margin-left: 3%;
	}
	
	#ping {
		color: #394043;
		font-size: 16px;
	}
	
	.assessData {
		width: 100%;
		text-align: center;
		margin-top: 15px;
		color: #9c9fa1;
	}
</style>