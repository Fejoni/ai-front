import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";
import Post from "@/views/admin/post/Post";
import PostCreate from "@/views/admin/post/PostCreate";
import ViewPost from "@/components/Post/ViewPost";
import Poligon from "@/views/admin/test/Poligon";
import UserDataBase from "@/views/admin/database/UserDataBase";
import LayoutDataBase from "@/views/admin/database/LayoutDataBase";

// Admin Panel
import Admin from "@/views/admin/admin";
import UserPAdmin from "@/views/admin/user/UserPAdmin";
import FindUser from "@/views/admin/user/functions/FindUser";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {layout: "default-layout"}
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {requiresVisitor: true, layout: "auth-layout"},
    },

    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        meta: {requiresAuth: true, layout: "admin-layout"}
    },

    {
        path: '/admin/database',
        name: 'LayoutDataBase',
        component: LayoutDataBase,
        meta: {requiresAuth: true, layout: "admin-layout"}
    },

    {
        path: '/admin/user',
        name: 'userPAdmin',
        component: UserPAdmin,
        meta: {requiresAuth: true, layout: "admin-layout"}
    },

    {
        path: '/admin/database/user',
        name: 'UserDataBase',
        component: UserDataBase,
        meta: {requiresAuth: true, layout: "admin-layout"}
    },

    {
        path: '/admin/user/find',
        name: 'findUser',
        component: FindUser,
        meta: {requiresAuth: true, layout: "admin-layout"}
    },

    {
        path: '/admin/posts',
        name: 'post',
        component: Post,
        meta: {requiresAuth: true, layout: "admin-layout"}
    },

    {
        path: '/admin/post/:id',
        name: 'ViewPost',
        component: ViewPost,
        meta: {requiresAuth: true, layout: "admin-layout"}
    },

    {
        path: '/admin/post/create',
        name: 'postCreate',
        component: PostCreate,
        meta: {requiresAuth: true, layout: "admin-layout"}
    },

    {
        path: '/admin/test/poligon',
        name: 'Poligon',
        component: Poligon,
        meta: {requiresAuth: true, layout: "admin-layout"}
    },

    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {requiresVisitor: true, layout: "auth-layout"}
    },

    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
        meta: {requiresAuth: true, layout: "default-layout"}
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
