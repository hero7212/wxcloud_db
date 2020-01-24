const db = wx.cloud.database()
const _ = db.command
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    productsCollection.doc(options.id).field({
      color: true,
      price: true,
      title: true,
      tags: true
    }).get({
      success: res => {
        this.setData({
          product: res.data,
          id: options.id
        })
      }
    })
  },

  addtag: function (event) {
    productsCollection.doc(this.data.id).update({
      data: {
        tags: _.push(['mini-program','cloud'])
      }
    }).then(res => {
      console.log(res)
    })
  },

  deltag: function (event) {
    // productsCollection.doc(this.data.id).update({
    //   data: {
    //     tags: _.unshift()
    //   }
    // }).then(res => {
    //   console.log(res)
    // })
    productsCollection.doc(this.data.id).update({
      data: {
        tags: _.pop()
      }
    }).then(res => {
      console.log(res)
    })
  },

  update: function (event) {
    productsCollection.doc(this.data.id).update({
      data: {
        title: "更新后的title",
        price: 123.321
      }
    }).then(res => {
      console.log(res)
    })
  },

  batchUpdate: function (event) {
    wx.cloud.callFunction({
      name: 'batchUpdate',
      success: res => {
        console.log(res)
      }
    })
  },

  delete: function (event) {
    productsCollection.doc(this.data.id).remove().then(res => {
      console.log(res)
    })
  },

  batchDelete: function (event) {
    wx.cloud.callFunction({
      name: 'batchDelete',
      success: res => {
        console.log(res)
      }
    })
  },
})