import Vue from 'vue'
import App from './app.vue'
import "./index.css";

// Full spec-compliant TodoMVC with localStorage persistence
// and hash-based routing in ~120 effective lines of JavaScript.

// localStorage persistence


// app Vue instance
var app = new Vue({
    el: '#app',
    render: h => h(App),
    // template: '<App/>',
    // components: {
    //     App
    // },
    // app initial state

})

// handle routing


// mount
// app.$mount('.todoapp')
