import { asynRouter } from '@/router'

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
    // console.log(item.component)
    // () => import( `@/views/${vuename}.vue`)
    // item.component = resolve => require([`@/views/${item.component}.vue`], resolve)
    // console.log(item.component)
    children.push(asynRouter[item.component])
  } else if (item.children) {
    item.children.forEach(e => {
      generateRoutes(children, e)
    })
  }
}
