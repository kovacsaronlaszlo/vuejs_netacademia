// vue router
import VueRouter from 'vue-router';

import index from './pages/index.vue';
import blog from './pages/blog.vue';

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
       }
   ]
});