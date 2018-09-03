// vue router
import VueRouter from 'vue-router';

import index from './pages/index.vue';
import blog from './pages/blog.vue';
import post from './pages/post.vue';
import contact from './pages/contact.vue';
import survey from './pages/survey.vue';
import statistics from './pages/statistics.vue';

// router
export default new VueRouter({
    routes: [
        {
           name: 'index',
           path: '/',
           component: index
        },
        {
           name: 'blog',
           path: '/blog',
           component: blog,
        },
        {
           name: 'blogCategory',
           path: '/blog/category/:categoryName',
           component: blog
        },
        {
           name: 'blogPost',
           path: '/blog/post/:postID',
           component: post
        },
        {
           name: 'contact',
           path: '/contact',
           component: contact,
        },
        {
            name: 'survey',
            path: '/survey',
            component: survey,
        },
        {
            name: 'statistics',
            path: '/statistics',
            component: statistics,
        }
   ],
   scrollBehavior (to, from, savedPosition) {
       return { x: 0, y: 0 }
   }
});