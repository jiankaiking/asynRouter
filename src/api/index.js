import axios from 'axios'
import qs from 'qs'
// import { Message } from 'element-ui'

const service = axios.create({
  baseURL: 'https://www.fastmock.site/mock/3c3833ffab305e00713821ef690777a3/mymock',
  timeout: '6000'
})

service.interceptors.request.use(config => {
  config.method === 'post' ? config.data = qs.stringify({ ...config.data }) : config.params = { ...config.data }
  return config
}, error => error)

service.interceptors.response.use(response => {
  // if (response.data.code !== 200) {
  //   Message.error(response.data.msg)
  // }
  return response.data
}, error => error)

export default service
