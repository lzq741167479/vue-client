import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/layout'

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@mainView/error-page/404'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@pages/login/main'),
    hidden: true
    // },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/',
    //   children: [
    //     {
    //       path: '/',
    //       component: () => import('@pages/main/main'),
    //       name: 'Main'
    //     }
    //   ]
  }
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        component: () => import('@mainView/home'),
        name: 'Home',
        meta: {
          title: '首页',
          icon: '404',
          noCache: true,
          affix: true,
          module: 'Home',
          request: {}
        }
      }
    ]
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '企业档案',
      icon: '404'
    },
    children: [
      {
        path: 'home1',
        component: () => import('@mainView/page'),
        name: 'home1',
        meta: {
          title: '首页测试1',
          icon: '404',
          noCache: true,
          module: 'home1',
          request: {}
        }
      },
      {
        path: 'home2',
        component: () => import('@mainView/test'),
        name: 'home2',
        meta: {
          title: '首页测试2',
          icon: '404',
          noCache: true,
          module: 'home2',
          request: {}
        }
      }
    ]
  },
  {
    path: '/test',
    component: Layout,
    redirect: '/test',
    children: [
      {
        path: '/test',
        component: () => import('@mainView/test'),
        name: 'test',
        meta: {
          title: '测试页',
          icon: 'iconshouye',
          noCache: true,
          module: 'test',
          request: {}
        }
      }
    ]
  },
  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@mainView/test'),
        name: 'Tab',
        meta: { title: 'Tab', icon: 'tab' }
      }
    ]
  },
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'Icons', icon: 'icon', noCache: true }
  //     }
  //   ]
  // },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export default router
