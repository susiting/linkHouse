<template>
	<main>
		<header class="linkHouse c">
			<p class="headreturn l">
				<router-link to="/" >
					<mt-button icon="back"></mt-button>
				</router-link>
			</p>
		</header>
		<div class="pay">
			<h2>贷款成数测试</h2>
			<p>繁杂的计算问题，用选择题搞定。</p>
			<p class="c"><i class="iconfont l">&#xe607;</i>
				<span class="l payLocal">广州市</span>
				<span class="r payChange">切换城市</span>
			</p>
			<p @click="change()">开始测试</p>
			
		</div>
		<mt-popup v-model="popupVisible" position="popup-fade">
		  <p>功能未完善</p>
		</mt-popup>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				popupVisible:false
			}
		},
		methods:{
			change(){
				this.popupVisible=!this.popupVisible
			}
		}
	}
</script>

<style scoped>
	.pay{
		padding: 150px 40px 0;
	}
	h2{
		font-size: 34px;
		color: #394043;
		margin-bottom: 5px;
	}
	.pay p:nth-of-type(1){
		color: #9fa3a5;
		font-size: 13px;
		margin-bottom: 50px;
	}
	.pay p:nth-of-type(2){
		border-top: 1px solid #e5e5e5;
    	border-bottom: 1px solid #e5e5e5;
		color: #394043;
		font-size: 16px;
		margin-bottom: 20px;
		padding: 12px 0;
	}
	.pay p:nth-of-type(2) i{
		font-size: 20px;
		padding: 1px;
	}
	.payLocal{
		font-weight: bold;
	}
	.payChange{
		color: #00ae66;
	}
	.pay p:nth-of-type(3){
		color: white;
		text-align: center;
		background-color:#00ae66 ;
		font-size: 16px;
		padding: 14px;
		border-radius:2px ;
		font-weight: bold;
	}
	.mint-popup{
		padding-top:35px;
		width: 200px;
		height: 120px;
		font-size:20px ;
		text-align: center;
		color: #00ae66;
		background-color: white;
		border:1px solid #e7e8e9;
		border-radius: 10px;
	}
</style>