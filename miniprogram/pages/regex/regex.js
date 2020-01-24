const db = wx.cloud.database()
const emailCollection = db.collection('email')
Page({
  onLoad: function (options) {
    emailCollection.count().then(res => {
      console.log('数组总量：', res.total)
    })
    emailCollection.get().then(res => {
      console.log('全部数据', res.data)
    })
    emailCollection.where({
      address: db.RegExp({
        regexp: 'foxmail'
      })
    }).get().then(res => {
      console.log('reg foxmail', res.data)
    })
    emailCollection.where({
      address: /gmail/i
    }).get().then(res => {
      console.log('reg gmail', res.data)
    })
  },
})