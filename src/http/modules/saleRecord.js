import axios from '../axios'

//查询销售记录
export const list = () => {
  return axios({
      url: '/saleRecord/getSaleRecord',
      method: 'get'
  })
};

//搜索销售记录
export const searchSaleRecord = (inputValue) => {
    return axios({
        url: '/saleRecord/searchSaleRecord/' + inputValue,
        method: 'get'
    })
};

//更新销售记录
export const updateSaleRecord = (params) => {
    return axios({
        url: '/saleRecord/updateSaleRecord',
        method: 'post',
        params
    })
};

//新增销售记录
export const addSaleRecord = (params) => {
    return axios({
        url: '/saleRecord/addSaleRecord',
        method: 'post',
        params
    })
};

//删除销售记录
export const deleteSaleRecordById = (id) => {
    return axios({
        url: '/saleRecord/deleteSaleRecordById/' + id,
        method: 'get'
    })
};

//统计前七天销售记录
export const getLately7DaysSaleRecord = (day) => {
    return axios({
        url: '/saleRecord/getLately7DaysSaleRecord/' + day,
        method: 'get'
    })
};
