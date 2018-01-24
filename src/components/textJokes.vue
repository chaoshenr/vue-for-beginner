<template>
  <div class="text-jokes">
      <h1>home page</h1>
      <div class="jokes-wrapper">
          <joke-item v-for="(item, index) in jokeList" :key="index" :item="item"></joke-item>
      </div>
      
  </div>
</template>

<script>
import requestAPI from "@/js/requestAPI"
import jokeItem from "@/components/jokeItem"
export default {
    name: "TextJokes",
    data(){
        return {
            jokeList: []
        }
    },
    components: {
        jokeItem: jokeItem
    },
    created(){
        //请求
        requestAPI.getJokeList({
            page: 2
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

</style>


