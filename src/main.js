import './assets/styles/styles.scss';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiSuitHeartFill } from 'oh-vue-icons/icons';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

addIcons(BiSuitHeartFill);

const app = createApp(App);
app.use(router);
app.component('v-icon', OhVueIcon);
app.mount('#app');
