// css
import 'bootstrap/scss/bootstrap.scss';
import './style.scss';

// js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';

// init
Vue.use(VueRouter);
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

// dataservice teszt
import DataService from './DataService';

const message = {
    "email" : "dosa.balint@netacademia.hu",
    "message" : "Teszt üzenet 2",
    "name" : "Dósa Bálint"
}

DataService.PostContactMessage(message)
    .then(succses => {
        console.log('succses: ', succses);
    });