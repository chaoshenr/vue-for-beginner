<template>
    <div class="image-jokes">
        <image-item v-for="(item, key) of imageJokes" :key="key" :item="item"></image-item>
    </div>
</template>
<script>
import requestApI from "@/js/requestAPI"
import imageItem from "@/components/imageItem"
export default {
    name: "ImageJokes",
    data(){
        return {
            imageJokes: []
        }
    },
    components: {
        imageItem
    },
    created(){
        requestApI.getImageJokes({
            page: 2
        }).then( result => {
            let contentList = result.beans.contentlist;
            this.imageJokes = [...contentList];
            console.log( this.imageJokes );
        }).catch( err => {

        })
    }
}
</script>
