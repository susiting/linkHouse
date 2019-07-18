<template>
	<main>
		<header>
			<mt-header title="注册账号">
				<router-link to="/login" slot="left">
					<mt-button icon="back" @click="go()"></mt-button>
				</router-link>
			</mt-header>
		</header>
		<div class="loginRegisterInput" id="registerInput">
			<p class="loginInput1">
				<input type="text" placeholder="请输入手机号" />
				<span>发送验证码</span>
			</p>
			<p class="loginInput2">
				<input type="text" placeholder="请输入验证码" />
			</p>
			<p class="loginInput2">
				<input type="text" placeholder="请输入新密码(至少8位，数字+字母)" />
			</p>
		</div>
		<p class="registerLogin">提交</p>
	</main>
</template>

<script>
	export default {
		methods: {
			go() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.mint-header {
		color: #394043;
		background-color: white;
		font-size: 18px;
	}
	
	#registerInput {
		padding: 0 30px;
	}
	
	.registerLogin {
		width: 85%;
		margin: 12px auto;
		padding: 13px 0;
		font-size: 16px;
		text-align: center;
		color: white;
		background-color: #66cea3;
		margin-bottom: 20px;
		font-weight: bold;
	}
</style>