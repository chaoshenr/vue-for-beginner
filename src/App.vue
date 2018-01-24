<template>
    <div id="app">
		<div class="header">
			<router-link to="/text-jokes">文本</router-link>
		</div>
      	<router-view/>
    </div>
</template>

<script>
export default {
  	name: 'App',
	created(){
		
	}
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
