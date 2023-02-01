import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {store} from "./store.js";
import router from "./router.js";

createApp(App).use(router).provide("store",store).mount('#app')
