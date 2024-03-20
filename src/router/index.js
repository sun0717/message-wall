import { createRouter, createWebHashHistory } from "vue-router";

const XiaoYuIndex = () => import ("@/views/XiaoYuIndex.vue")
const WallMessage = () => import ("@/views/WallMessage.vue")

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/wall?id=0',
            name: 'index',
            component: XiaoYuIndex,
            children: [
                {
                    path: 'wall',
                    component: WallMessage
                }
            ]
        }
    ],
});
  
export default router;