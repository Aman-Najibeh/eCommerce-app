// Composables
import { createRouter, createWebHistory } from 'vue-router'
import {useUserStore} from '@/store/User'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: '/products',
        name: 'proudcts',
        component: () => import('@/views/ProuductsView.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutView.vue'),
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
      },
      
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/views/CartView.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: '/singleproduct',
        name: 'singleproduct',
        component: () => import('@/views/SingleProduct.vue'),
      },
     
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profileView.vue'),
        meta:{
          gurd:'auth'
        }
      },
       { 
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue'),
        meta:{
          gurd:'public'
        }
      },

    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/Admin/AdminBar.vue'),
    children: [
      { 
        path: '/chartView',
        name: 'chartView',
        component: () => import('@/views/chartView.vue'),
        meta:{
          gurd:'admin'
        }
      },
      { 
        path: '/productlist',
        name: 'productlist',
        component: () => import('@/views/ProductListView.vue'),
        meta:{
          gurd:'admin'
        }
      },
      { 
        path: '/addProduct',
        name: 'addProduct',
        component: () => import('@/views/AddProductsView.vue'),
        meta:{
          gurd:'admin'
        }
      },
      { 
        path: '/usersList',
        name: 'UsersList',
        component: () => import('@/views/UsersListView.vue'),
        meta:{
          gurd:'admin'
        }
      },
      { 
        path: '/editProduct',
        name: 'EditProduct',
        component: () => import('@/views/EditProductlist.vue'),
        meta:{
          gurd:'admin'
        }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash ,
        offset: { x: 0, y: 100 },
        behavior: 'smooth',
      }}
      else
      {
        scrollTo({
          top: 0,
          left: 0,
          // behavior: 'smooth'
        });
      }
    
  }
})

  
  router.beforeEach((to, from, next) => {
    const store=useUserStore()
    if(to.meta.gurd === 'auth' && !store.isLoggedIn ){
      next('/login')
    }
    // if(to.meta.gurd === 'public' && store.isLoggedIn ){
    //   next('/profile')
    // }
    else
    {
      next()
     
    }
  })
export default router
