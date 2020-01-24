const db = wx.cloud.database()
const _ = db.command
const productsCollection = db.collection('products')
Page({




  data: {
    page: 0
  },




  onLoad: function() {
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      })
    })
  },

  onReachBottom: function() {
    let page = this.data.page + 20
    productsCollection.skip(page).get().then(res => {
      let new_data = res.data
      let old_data = this.data.products

      this.setData({
        products: old_data.concat(new_data),
        page: page
      }, res => {
        console.log(res)
      })
    })
  },

  onPullDownRefresh: function() {
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      }, res => {
        console.log('jia')
        wx.stopPullDownRefresh()
      })
    })
  },

  click: function(event) {
    productsCollection.doc(event.currentTarget.dataset.id).update({
      data: {
        price: _.inc(10)
      }
    })
  }

})
