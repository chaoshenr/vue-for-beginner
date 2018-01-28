<template>
    <div class="gif-item">
        <span class="title">{{item.title}}</span>
        <div class="gif-wrapper">
            <img :src="item.img" alt="动图获取失败">
        </div> 
    </div>
</template>
<script>
export default {
    name: "GifItem",
    props: ["item"],
}
</script>
<style lang="scss" scoped>
.gif-item {
    width: 100%;
    padding: .1rem 0;
    .title {
        font-size: 0.14rem;
        text-align: center;
        display: inline-block;
        margin: .1rem 0;
    }
    .gif-wrapper {
        width: 100%;
        background: no-repeat;
        img {
            width: 100%;
        }
    }
    
}
</style>


