import { createWebHistory, createRouter } from "vue-router";

const routes =  [
    {
        path: "/",
        alias: "/home",
        name: "home",
        // component: () => import("./components/water-com")
        component: () => import("./views/HomePage")
    },
    {
        path: "/",
        alias: "/main",
        name: "main",
        component: () => import("./views/MainPage")
    },
    {
        path: "/",
        alias: "/sub",
        name: "sub",
        component: () => import("./components/subpage-com")
    },
    ]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;