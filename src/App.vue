<template>
    <div id="app">
		<div class="header">
			<router-link class="router-link" to="/text-jokes">文字笑话</router-link>
            <router-link class="router-link" to="/image-jokes">图片笑话</router-link>
            <router-link class="router-link" to="/gif-jokes">动画笑话</router-link>
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

<style lang="scss" scoped>
#app {
    $header_H: 60px;
    padding-top: $header_H;
    font-size: .16rem;
    .header {    
        height: $header_H;
        background: rgb(238, 238, 238);
        position: fixed;
        top: 0;
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        width: 100%; 
        .router-link {
            width: 1.8rem;
            height: $header_H;
            line-height: $header_H;
            display: inline-block;
            color: #888;
            &:hover {
                background: rgb(207, 28, 28);
                color: white;
            }
        }
        .router-link-active {
            background: rgb(207, 28, 28);
            color: white;
        }
        @media screen and (max-width: 450px) {
            .router-link {
                width: 33.333%;
            }
        }
        
        

    }
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #888;
    
}
</style>
