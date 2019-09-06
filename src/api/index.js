import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'

axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
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


export function gitGoodList() {
  return axios.get(`/category/goodList`)
}

//获取列表页右侧数据
export function getCateListRight(cid) {
  return axios.get(`/category/cateRightList?cid=${cid}`)
}

// 获取优选列表数据
export function getOptList() {
  return axios.get('/category/optimization')
}

// 我的页猜你喜欢
export function getProfileGuessLike() {
  return axios.get('/profiles/profilesGuessLike')
}


// 商品评价
export function getEvaluationList() {
  return axios.get('/detail/getEvaluationList')
}

// 商品详情
export function getDetail() {
  return axios.get('/detail/getDetail')
}

// 加入购物车
export function addCart(obj) {
  return axios.get('/detail/addCart', {
    params: JSON.stringify(obj)
  })
}

export function getCart() {
  return axios.get('/cart/getCart')
}

export function getFloor() {
  return axios.get('/home/getFloor')
}

export function delectCart(cartList) {
  return axios.post('/cart', {
    cart: cartList
  });
}

