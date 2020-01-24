// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const productsCollection = db.collection('products')
// 云函数入口函数
exports.main = async (event, context) => {
  return await productsCollection.add({
    data: {
      title: "Product 3",
      image: "http://via.placeholder.com/200/f60/fff?text=Hello+world!",
      tags: ["tag4", "tag3"],
      price: 50.12,
      color: "blue"
    }
  })
}