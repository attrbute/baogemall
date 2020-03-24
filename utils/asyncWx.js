/* 
    promise 形式 getSetting
*/
export const getSetting=()=>{
    return new Promise((resolve,reject)=>{
        wx.getSetting({
            success: (res)=>{
                resolve(res);
            },
            fail: (err)=>{
                reject(err);
            }
        });
    })
}

/* 
    promise 形式 chooseAddress
*/
export const chooseAddress=()=>{
    return new Promise((resolve,reject)=>{
        wx.chooseAddress({
            success: (res)=>{
                resolve(res);
            },
            fail: (err)=>{
                reject(err);
            }
        });
    })
}

/* 
    promise 形式 openSetting
*/
export const openSetting=()=>{
    return new Promise((resolve,reject)=>{
        wx.openSetting({
            success: (res)=>{
                resolve(res);
            },
            fail: (err)=>{
                reject(err);
            }
        });
    })
}

/* 
    promise 形式 showmodal
*/
export const showModal=({content})=>{
    return new Promise((resolve,reject)=>{
        wx.showModal({
            title: '提示',
            content: content,
            success: (res) => {
                resolve(res);
            },
            fail: (err) => {
                reject(err);
            }
          });
    })
}

/* 
    promise 形式 showToast
*/
export const showToast=({title})=>{
    return new Promise((resolve,reject)=>{
        wx.showToast({
            title: title,
            content: "none",
            success: (res) => {
                resolve(res);
            },
            fail: (err) => {
                reject(err);
            }
          });
    })
}

/* 
    promise 形式 login
*/
export const login=()=>{
    return new Promise((resolve,reject)=>{
        wx.login({
            timeout:10000,
            success: (res) => {
                resolve(res);
            },
            fail: (err) => {
                reject(err);
            }
          });
    })
}

/* 
    promise 形式 requestPayment 支付必要的参数
*/
export const requestPayment=(pay)=>{
    return new Promise((resolve,reject)=>{
        wx.requestPayment({
            ...pay,
            success: (res) => {
                resolve(res);
            },
            fail: (err) => {
                reject(err);
            }
          });
    })
}

