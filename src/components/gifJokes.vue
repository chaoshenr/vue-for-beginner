<template>
    <div class="gif-jokes">
        <gif-item v-for="(item, key) of gifJokes" :key="key" :item="item"></gif-item>
    </div>
</template>

<script>
import requestAPI from "@/js/requestAPI"
import gifItem from "@/components/gifItem"
export default {
    name: "gifJokes",
    components: {
        gifItem
    },
    data(){
        return {
            gifJokes: []
        }
    },
    created(){
        requestAPI.getGifJokes({
            page: 1
        }).then( result => {
            let contentList = result.beans.contentlist;
            this.gifJokes = [...contentList];
            console.log( this.gifJokes );
        }).catch( err => {

        })
    }
}
</script>

