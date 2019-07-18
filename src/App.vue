<template>
  <div id="app">
   <!--最外面那层，一般只放一个<router-view></router-view>-->
   <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
	padding: 0px;
	margin: 0px;
	max-width: 750px;
	list-style: none;
}

</style>
