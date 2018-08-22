<template>

    <div>
        <Navigation :itemCollection="navItems" @pageChange="onPageChange"></Navigation>

        <router-view></router-view>

        <Footer></Footer>
    </div>

</template>
<script>

import Navigation from './componenets/Navigation.vue';
import Footer from './componenets/Footer.vue';

import index from './pages/index.vue';
import blog from './pages/blog.vue';

export default {
    name: 'App',
    components:{
        Navigation,
        Footer,
        index,
        blog
    },
    data: function(){
        return {
            currentPage: 'index',
            navItems: []
        };
    },
    created() {
        this.navItems.push({
            name: 'Főoldal',
            id: 'index',
            path: '/'
        });
        this.navItems.push({
            name: 'Blog',
            id: 'blog',
            path:'/blog'
        });
    },
    methods: {
        onPageChange(newPage) {
            this.currentPage = newPage;
        }
    }
};
</script>