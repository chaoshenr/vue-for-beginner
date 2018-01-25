<template>
  <div class="text-jokes">
      <div class="jokes-wrapper">
          <text-item class="text-item" v-for="(item, index) in jokeList" :key="index" :item="item"></text-item>
      </div>
      
  </div>
</template>

<script>
import requestAPI from "@/js/requestAPI"
import textItem from "@/components/textItem"
export default {
    name: "TextJokes",
    data(){
        return {
            jokeList: []
        }
    },
    components: {
        textItem: textItem
    },
    created(){
        //请求
        requestAPI.getTextJokes({
            page: 1
        }).then( res => {
            this.jokeList = res.beans.contentlist;
            console.log(this.jokeList);
        }).catch(err => {
            console.log(err);
        })
    }
}
</script>
<style lang="scss" scoped>
.text-jokes {
    width: 100%;
    .jokes-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        
    }
}
</style>


