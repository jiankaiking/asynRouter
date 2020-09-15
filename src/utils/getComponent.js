export default (vuename) => () => import(`@/views/${vuename}.vue`)
