<template>
    <div class="gif-jokes">
        gif-jokes
    </div>
</template>

<script>
import requestAPI from "@/js/requestAPI"
export default {
    name: "gifJokes",
    data(){
        return {
            gifJokes: []
        }
    },
    created(){
        requestApI.getGifJokes({
            page: 1
        }).then( result => {
            let contentList = result.beans.contentlist;
            this.imageJokes = [...contentList];
            console.log( this.imageJokes );
        }).catch( err => {

        })
    }
}
</script>

