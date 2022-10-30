import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';

// Tailwind CSS
import '@/style.css';
// Animate JS
import 'animate.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
