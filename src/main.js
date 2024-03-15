import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import pinia from "@/stores/store"
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';

createApp(App).use(ArcoVue).use(ArcoVueIcon).use(pinia).use(router).mount('#app')
