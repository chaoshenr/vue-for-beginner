<template>
  <div class="image-item">
      <span class="title">{{ item.title }}</span>
      <div class="img-wrapper">
          <img :src="item.img" alt="图片未找到">
      </div>   
  </div>
</template>

<script>
export default {
    name: "ImageItem",
    data(){
        return {
        }
    },
    props:["item"]
}
</script>

<style lang="scss" scoped>
.image-item {
    width: 100%;
    padding: .1rem 0;
    .title {
        font-size: 0.14rem;
        text-align: center;
        display: inline-block;
        margin: .1rem 0;
    }
    .img-wrapper {
        width: 100%;
        background: no-repeat;
        img {
            width: 100%;
        }
    }
    
}
</style>


