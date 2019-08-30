import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.1.14:3000/api'

axios.interceptors.response.use(function(response) {
  return response.data
}, function(error) {
  return Promise.reject(error)
})

// 轮播广告图
export function getBanners() {
  return axios.get('/home/getBanners')
}
// 猜你喜欢
export function getGuessLike() {
  return axios.get('/home/getGuessLike')
}
// 秒杀
export function getSecKill() {
  return axios.get('/home/getSecKill')
}
// 优选指南
export function getFirstChoose() {
  return axios.get('/home/getFirstChoose')
}
//获取列表页左侧数据
export function getCateList() {
  return axios.get('/category/cateLeftList')
}
// 首页分类
export function getNavShotcuts() {
  return axios.get('/home/getNavShotcuts')
}
// 国美头条
export function getHeadline() {
  return axios.get('/home/headline')
}
 //获取列表页右侧数据
export function getCateListRight (cid) {
  return axios.get(`/category/cateRightList?cid=${cid}`)
}

 // 获取优选列表数据
export function getOptList() {
  return axios.get('/category/optimization')
}

//
export function getProfileGuessLike(){
  return axios.get('/profiles/profilesGuessLike')
}
export function getCart(){
  return axios.get('/cart/getCart')
}
