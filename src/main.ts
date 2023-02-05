import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import globalComponents from '@/components';
import router from './router';
import store from './store';
import i18n from './locale';
import directive from './directive';
import './mock';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/style/global.less';
import '@/api/interceptor';
// 创建Vue对象
const app = createApp(App);
// 全局引用AcroVue组件 和图标
app.use(ArcoVue, {});
app.use(ArcoVueIcon);
// 引入路由
app.use(router);
// 引入store
app.use(store);
// 引入国际化
app.use(i18n);
// 引入全局组件  这里
app.use(globalComponents);
// 引入全局指令
app.use(directive);
// 挂载节点
app.mount('#app');
