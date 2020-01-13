import axios from '../axios'

//查询
export const list = (params) => {
  return axios({
      url: '/purchaseRecord/getPurchaseRecord',
      method: 'get'
  })
};

//搜索
export const searchPurchaseRecord = (inputValue) => {
    return axios({
        url: '/purchaseRecord/searchPurchaseRecord/' + inputValue,
        method: 'get'
    })
};

//更新
export const updatePurchaseRecord = (params) => {
    return axios({
        url: '/purchaseRecord/updatePurchaseRecord',
        method: 'post',
        params
    })
};

//新增
export const addPurchaseRecord = (params) => {
    return axios({
        url: '/purchaseRecord/addPurchaseRecord',
        method: 'post',
        params
    })
};

//删除
export const deletePurchaseRecordById = (id) => {
    return axios({
        url: '/purchaseRecord/deletePurchaseRecordById/' + id,
        method: 'get'
    })
};

//统计每年每月的采购额
export const monthlyStatistics = () => {
    return axios({
        url: '/purchaseRecord/monthlyStatistics',
        method: 'get'
    })
};
