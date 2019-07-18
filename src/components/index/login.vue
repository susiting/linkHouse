<template>
	<main>
		<header class="c">
			<router-link to="/my">
				<img src="../../assets/home/close.png" class="l" />
			</router-link>
			<router-link to="/register"><span class="r">注册</span></router-link>
		</header>
		<section class="loginCon">
			<p class="loginCon1">
				手机快捷登录
			</p>
			<p class="loginCon2">
				未注册过的手机号将自动创建链家账号，经纪人不会看到您的手机号
			</p>
			<div class="loginRegisterInput">
				<p class="loginInput1">
					<input type="text" placeholder="请输入手机号" />
					<span>获取验证码</span>
				</p>
				<p class="loginInput2">
					<input type="text" placeholder="请输入验证码" />
				</p>
			</div>
			<p class="loginCon4">
				登录
			</p>
			<p class="loginCon5">
				账号密码登录
			</p>
		</section>
	</main>
</template>

<script>
</script>

<style scoped>
	header {
		padding: 10px 15px 0 15px;
	}
	
	header a {
		color: #6b7072;
	}
	
	header img {
		width: 24px;
	}
	
	header span {
		font-size: 16px;
		color: #6b7072;
	}
	
	.loginCon {
		padding: 0 30px;
		margin-top: 25px;
	}
	
	.loginCon1 {
		font-size: 28px;
		color: #394043;
		margin-bottom: 10px;
	}
	
	.loginCon2 {
		color: #9ea1a3;
		margin-bottom: 4px;
		font-size: 16px;
	}
	
	.loginCon4 {
		width: 100%;
		margin-top: 12px;
		padding: 13px 0;
		text-align: center;
		color: white;
		background-color: #66cea3;
		margin-bottom: 20px;
		font-size: 16px;
	}
	
	.loginCon5 {
		width: 100%;
		text-align: center;
		font-size: 12px;
	}
</style>

<style>

</style>