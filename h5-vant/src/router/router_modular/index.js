
const router_modular = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
    }
]
export default router_modular