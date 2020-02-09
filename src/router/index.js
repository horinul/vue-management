import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateArticle from '../views/CreateArticle.vue'
import ListArticle from '../views/ListArticle.vue'
import EditArticle from '../views/EditArticle.vue'

Vue.use(VueRouter)

const routes = [
  // 文章列表
  {
    path: '/',
    name: 'Home',
    redirect:'/articles/index'
  },
  // 新建文章
  {
    path:'/articles/index',
    name:'list-article',
    component:ListArticle
  },
  {
    path: '/articles/create',
    name: 'create-article',
    component:CreateArticle
  },
  {
    path:'/articles/:id/edit',
    name:'edit-article',
    component:EditArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
