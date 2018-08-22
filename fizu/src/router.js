// vue router
import VueRouter from 'vue-router';

import index from './pages/index.vue';
import blog from './pages/blog.vue';
import post from './pages/post.vue';

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
       }
   ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});