import { createWebHistory, createRouter } from "vue-router";

const routes =  [
    {
        path: "/",
        alias: "/home",
        name: "home",
        component: () => import("./views/HomePage")
    },
    {
        path: "/",
        alias: "/main",
        name: "main",
        component: () => import("./views/MainPage")
    },
    ]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;