<template>
  <div class="joke-item">
      <p class="title">{{item.title}}</p>
  </div>
</template>

<script>
export default {
    name: "JokeItem",
    data(){
        return {
            // itemData: null
        }
    },
    props: ["item"],
    created(){
        console.log(this.itemData);
    }
}
</script>

