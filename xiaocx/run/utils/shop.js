var arr = [
  { bid: 124, tit: "香酥炸鸡", img: ["img/pro/124.jpg", "img/pro/1242.jpg", "img/pro/1243.jpg"], pay: 2, num: 10, choose: true, class_name: "油炸" },
  { bid: 123, tit: "无巩油条", img: ["img/pro/123.jpg", "img/pro/1232.jpg", "img/pro/1233.jpg"], pay: 2, num: 10, choose: true, class_name: "油炸" },
  { bid: 125, tit: "烤羊肉串", img: ["img/pro/125.jpg", "img/pro/1252.jpg", "img/pro/1253.jpg"], pay: 2, num: 99, choose: true, class_name: "烧烤" },
  { bid: 126, tit: "烧烤茄子", img: ["img/pro/126.jpg", "img/pro/1262.jpg", "img/pro/1263.jpg"], pay: 2, num: 99, choose: true, class_name: "烧烤" },
  { bid: 127, tit: "兰州拉面", img: ["img/pro/127.jpg", "img/pro/1272.jpg", "img/pro/1273.jpg"], pay: 2, num: 99, choose: true, class_name: "面食" },
  { bid: 128, tit: "新疆拌面", img: ["img/pro/128.jpg", "img/pro/1282.jpg", "img/pro/1283.jpg"], pay: 2, num: 99, choose: true, class_name: "面食" },
  { bid: 129, tit: "凉拌猪头肉", img: ["img/pro/129.jpg", "img/pro/1292.jpg", "img/pro/1293.jpg"], pay: 2, num: 99, choose: true, class_name: "凉卤" },
  { bid: 130, tit: "卤牛肉", img: ["img/pro/130.jpg", "img/pro/132.jpg", "img/pro/133.jpg"], pay: 2, num: 99, choose: true, class_name: "凉卤" }
]

//随机图片数组
function choose() {
  var num = parseInt(arr.length * Math.random())
  return arr[num].img
}

//静态数据 产品  随机数组
module.exports = {
  product: arr,
  banner: choose()
}








