<template>
    <div class="image-jokes">
        image-jokes
    </div>
</template>
<script>
import requestApI from "@/js/requestAPI"
export default {
    name: "ImageJokes",
    data(){
        return {
            imageJokes: []
        }
    },
    created(){
        requestApI.getImageJokes({
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
