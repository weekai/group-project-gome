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
//获取分类页左侧数据
export function getCateList () {
    return axios.get(`/category/cateLeftList`)
 }

 //获取分类页右侧数据
export function getCateListRight (cid) {
  return axios.get(`/category/cateRightList?cid=${cid}`)
}

//获取列表页数据
export function gitGoodList () {
  return axios.get(`/category/goodList`)
}
 
export function getNavShotcuts () {
    return axios.get('/home/getNavShotcuts')
 }

 // 获取优选列表数据
export function getOptList() {
  return axios.get('/category/optimization')
}
