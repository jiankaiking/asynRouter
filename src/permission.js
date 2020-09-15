import router from '@/router'
import service from '@/api'
import { creatRouter } from '@/utils/creatRouter'
let hasMenus = false
router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else if (hasMenus) {
      next()
    } else {
      // console.log(creatRouter)
      const menuData = await service.get('/get/router/list')
      const routes = creatRouter(menuData.data)
      console.log(menuData)
      router.addRoutes(routes)
      hasMenus = true
      next({ path: to.path || '/' })
    }
  } else {
    hasMenus = false
    if (to.path === '/login') {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
  // console.log(1)
})
