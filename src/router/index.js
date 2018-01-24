import Vue from 'vue'
import Router from 'vue-router'
import TextJokes from "@/components/textJokes"
import ImageJokes from "@/components/imageJokes"
import GifJokes from "@/components/gifJokes"

Vue.use(Router)

export default new Router({
	mode: "history",
    routes: [
		{
			path: "/",
			redirect: "/text-jokes"
		},
		{
			path: '/text-jokes',
			name: 'TextJokes',
			component: TextJokes
		},
		{
			path: '/image-jokes',
			name: 'ImageJokes',
			component: ImageJokes
		},
		{
			path: '/gif-jokes',
			name: 'GifJokes',
			component: GifJokes
		}
    ]
})
