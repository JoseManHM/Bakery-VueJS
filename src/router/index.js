/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router";
import clienteView from "../views/clienteView.vue";
import pasteleroView from "../views/pasteleroView.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: clienteView
    },
    {
        path: "/admin",
        name: "admin",
        component: pasteleroView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
