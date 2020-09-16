// import { asynRouter } from '@/router'

export function creatRouter(data) {
  // console.log(data)
  const result = []
  const children = []
  result.push({
    path: '/',
    component: () => import('../views/dashboard.vue'),
    children
  })
  data.forEach(item => {
    generateRoutes(children, item)
  })
  result.push(
    { path: '*', redirect: '/404' }
  )
  // console.log(result)
  return result
}

function generateRoutes(children, item) {
  if (item.component) {
    item.component = getViews(item.component)
    if (item.children && item.children.length > 0) {
      generateChildrenRoutes(item.children)
      // item.children.forEach(e => {
      //   generateRoutes(item.children, e)
      // })
    }
    children.push(item)
  }
}

function generateChildrenRoutes(children) {
  children.forEach(e => {
    if (e.children && e.children.length > 0) {
      generateChildrenRoutes(e.children)
    }
    e.component = getViews(e.component)
  })
}

function getViews(path) {
  return resolve => {
    require.ensure([], (require) => {
      resolve(require('@/views/' + path + '.vue'))
    })
  }
}
