import Vue from 'vue'
import Router from 'vue-router'
import TextJokes from "@/components/textJokes"

Vue.use(Router)

export default new Router({
    routes: [
		{
			path: '/text-jokes',
			name: 'TextJokes',
			component: TextJokes
		}
    ]
})
