require('./bootstrap');

window.Vue = require('vue');

//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    methods: {
    	logout() {
    		// alert("abd");
    		document.getElementById('logout-form').submit();
    	}
    }
});
