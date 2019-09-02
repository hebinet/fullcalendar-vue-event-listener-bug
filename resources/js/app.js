/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

// Registering the component works only like this
Vue.component('fullcalendar', require('@fullcalendar/vue').default);
Vue.component('fullcalendar-component', require('./components/FullcalendarComponent').default);

const app = new Vue({
    el: '#app',
    /*  // This doesn't work either... the browser is also complaining about the camel case
        // [Vue warn]: Unknown custom element: <fullcalendar> - did you register the component correctly?
        // For recursive components, make sure to provide the "name" option.
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
     */
    data() {
        return {
            plugins: [dayGridPlugin, interactionPlugin],
            header: {
                left: 'prev,next today',
                center: 'title',
                right: ''
            },
            events: [
                { title: "Event Now", start: new Date() }
            ]
        }
    },
    methods: {
        eventDrop(eventInfo) {
            console.log(eventInfo);
        }
    }
});
