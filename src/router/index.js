import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './../components/Main'
import QuizComp from "@/components/QuizComp";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: QuizComp,
    props: (route) => ({
      login: route.query.login,
      operationType: route.query.operationType,
      numberOfExamples: route.query.numberOfExamples
    })
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
