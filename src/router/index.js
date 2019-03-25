import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/HelloWorld')
  },
  {
    path: '/test',
    component: () => import('../components/testComp/TestPiazza')
  }
]

const router = new VueRouter({
  routes
})

export default router
