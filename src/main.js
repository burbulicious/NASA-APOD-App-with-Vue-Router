import './assets/styles/styles.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import fetchImageData from './api/fetchPictures';

const app = createApp(App);

app.use(router);

app.mount('#app');
fetchImageData();
