<template>
  <div class="text-item">
      <p class="text" v-html="item.text"></p>
      <p class="time">{{ item.ct }}</p>
  </div>
</template>

<script>
import $util from "@/js/util.js"
export default {
    name: "TextItem",
    data(){
        return {
            // itemData: null
        }
    },
    props: ["item"],
    created(){
        this.item.ct = $util.dateFormat("MM-dd hh:mm", new Date(this.item.ct));
    }
}
</script>

<style lang="scss" scoped>
.text-item {
    width: 100%;
    text-align: left;
    font-size: .16rem;
    margin-top: .2rem;
    color: #333;
    // background: #888;
    p {
        width: calc(100% - .24rem);
        margin: 0 auto;
    }
    .time {
        text-align: right;
        margin-top: 0.0.8rem;
        font-size: 0.14rem;
        color: #888;
        border-bottom-width: 1px;
        border-color: #999;
    }
}
</style>


