// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: 'empower-pay-5gpfkxg4e8c7f7a8' }) // 使用当前云环境
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const orderId = event.outTradeNo
  const returnCode = event.returnCode
  const wxContext = cloud.getWXContext()
  if(returnCode == 'SUCCESS'){
    //更新云数据库的订单状态，改为已支付的状态
    db.collection('publish').where({
      _id:orderId,
    }).updata({
      data:{
        pay_status:true,
      }
    })
    const res = {errcode:0,errmg:'支付成功'}
    return res
  }
}