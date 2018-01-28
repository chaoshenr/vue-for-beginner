<template>
  <div class="text-jokes">
      <div class="jokes-wrapper">
          <text-item class="text-item" v-for="(item, index) in jokeList" :key="index" :item="item"></text-item>
      </div>   
  </div>
</template>

<script>
import util from "@/js/util.js"
import requestAPI from "@/js/requestAPI"
import textItem from "@/components/textItem"
export default {
    name: "TextJokes",
    data(){
        return {
            jokeList: [],
            page: 1,
            loadMoreFlag: true
        }
    },
    components: {
        textItem
    },
    created(){
        let clientHeight = util.getClientHeight();
        
        console.log("clientHeight: "+clientHeight);
        
        //请求
        this.getTextJokes(this.page);
        console.log(util.getClientHeight())
        util.scroll(() => {
            console.log("scrolling....")
            let scrollHeight = util.getScrollHeight();
            let scrollTop = util.getScrollTop();
            if (scrollTop + clientHeight > scrollHeight - 100 && this.loadMoreFlag) {
                // alert("loadMore...")
                this.loadMoreFlag = false;
                this.getTextJokes(this.page ++);
            }
        })
    },
    updated(){
        // alert("update");
        this.loadMoreFlag = true;
    },
    methods: {
        getTextJokes (page) {
            requestAPI.getTextJokes({
                page: page
            }).then( res => {
                console.log("response....")
                console.log(res);
                if (res.status == 0) {
                    console.log(`page: ${page}`);
                    if (page == 1) {
                        this.jokeList = [];
                    }
                    this.jokeList = this.jokeList.concat(res.beans.contentlist);
                    console.log(this.jokeList);
                }
                
            }).catch(err => {
                console.log(err);
            })
        }
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


