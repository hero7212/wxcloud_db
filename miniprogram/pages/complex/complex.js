const db = wx.cloud.database()
const _ = db.command
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products: [],
    count: 0
  },
  simple: function(event) {
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  red: function (event) {
    productsCollection.where({
      color: 'red'
    }).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  lt: function (event) {
    productsCollection.where({
      price:_.lt(50)
    }).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  in: function (event) {
    productsCollection.where({
      price: _.in([4,11])
    }).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  and: function (event) {
    productsCollection.where({
      price: _.gt(20).and(_.lt(50))
    }).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  }, 
  limit: function (event) {
    productsCollection.limit(10).get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  orderBy: function (event) {
    productsCollection.orderBy('_id', 'asc').orderBy('price', 'desc').get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },
  count: function (event) {
    productsCollection.where({
      price: 11
    }).count().then(res => {
      console.log(res)
      this.setData({
        count: res.total
      })
    })
  }
})