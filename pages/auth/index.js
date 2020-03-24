import {login} from "../../utils/asyncWx.js";
import {request} from "../../request/index.js";

Page({
  // 获取用户信息
  async handleGetUserInfo(e){
    // console.log(e);
    try {
      // 1 获取用户信息 解构
      const {encryptedData,rawData,iv,signatrue} = e.detail;
      // 2 获取小程序登陆成功后的code (wx.login)
      const {code} = await login();
      // console.log(code);
      const loginParams = {encryptedData,rawData,iv,signatrue,code};
      // 3 发送请求 获取用户的token
      const {token} = await request({url:"/users/wxlogin",data:loginParams,method:"post"});
      // console.log(res);
      // 4 把token存入缓存中 同时跳转回上一个页面
      wx.setStorageSync("token", token);
      wx.navigateBack({
        delta: 1
      });
    } catch (error) {
      console.log(error);
    }
  }
})