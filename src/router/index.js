import { createRouter, createWebHashHistory } from "vue-router";

const XiaoYuIndex = () => import("@/views/XiaoYuIndex.vue")
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: XiaoYuIndex
        }
    ],
});
  
export default router;