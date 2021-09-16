import Vue from 'vue';
import '../scss/main.scss';
import 'bootstrap';

Vue.component('parraph', require('./components/Parraph.vue').default);
new Vue({ el: '#app' });
