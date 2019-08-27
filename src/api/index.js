import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.1.14:3000/api'

axios.interceptors.response.use(function (response) {
    return response.data
  }, function (error) {
    return Promise.reject(error)
  })


export function getBanners () {
    return axios.get('/home/getBanners')
  }
export function getGuessLike () {
    return axios.get('/home/getGuessLike')
  }
  //获取列表页左侧数据
export function getCateList () {
    return axios.get('/category/cateLeftList')
  }