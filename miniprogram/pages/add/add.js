const db = wx.cloud.database()
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  addData: function(event) {
    wx.cloud.callFunction({
      name: 'addData'
    }).then(res => {
      console.log(res)
    })
    // console.log(event)
    // productsCollection.add({
    //   data: {
    //     title: "Product 2",
    //     image: "http://via.placeholder.com/200/f60/fff?text=Hello+world!",
    //     tags: ["tag1", "tag3"],
    //     price: 20.12,
    //     color: "blue"
    //   },
    //   success: res => {
    //     console.log(res)
    //   }
    // })
  }
})