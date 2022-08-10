import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";
import Admin from "@/views/admin/admin";
import Post from "@/views/admin/post/Post";
import PostCreate from "@/views/admin/post/PostCreate";
import ViewPost from "@/components/Post/ViewPost";




const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {layout: "default-layout"}
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresVisitor: true, layout: "auth-layout" },
  },

  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: { requiresAuth: true, layout: "default-layout" }
  },

  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresVisitor: true, layout: "auth-layout" }
  },

  {
    path: '/admin/posts',
    name: 'post',
    component: Post,
    meta: { requiresAuth: true, layout: "default-layout" }
  },

  {
    path: '/admin/post/:id',
    name: 'ViewPost',
    component: ViewPost,
    meta: { requiresAuth: true, layout: "default-layout" }
  },

  {
    path: '/admin/post/create',
    name: 'postCreate',
    component: PostCreate,
    meta: { requiresAuth: true, layout: "default-layout" }
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { requiresAuth: true, layout: "default-layout" }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
