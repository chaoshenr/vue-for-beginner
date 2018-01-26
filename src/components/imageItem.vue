<template>
  <div class="image-item">
      <div class="img-wrapper">
          <img :src="item.img" alt="图片未找到">
      </div>
      <span class="sub-title">{{ item.title }}</span>  
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
    .img-wrapper {
        width: 100%;
        background: no-repeat;
        img {
            width: 100%;
        }
    }
    .sub-title {
        font-size: 0.14rem;
        text-align: center;
    }
}
</style>


