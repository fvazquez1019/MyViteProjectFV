import { createApp } from 'vue'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import './style.css'
import App from './App.vue'
import NaiveUI from 'naive-ui'
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App)
app.use(pinia);
app.use(NaiveUI)
app.mount('#app')
