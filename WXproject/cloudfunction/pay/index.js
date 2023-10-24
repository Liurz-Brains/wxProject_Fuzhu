// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: 'empower-pay-5gpfkxg4e8c7f7a8' }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const res = await cloud.cloudPay.unifiedOrder({
    "body":"支付订单",
    "outTradeNo":"2608230605"+Date.parse(new Date()),
    "spbillCreateIp":"127.0.0.1",
    "subMchId":1656788220,
    "totalFee":1*100,
    "envId":"empower-pay-5gpfkxg4e8c7f7a8",
    "noceStr":event.nonceStr,
    "tradeType":"JSAPI",
    "functionName": "pay_success"
  })
  return res
}