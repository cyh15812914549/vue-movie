import axios from '../axios'

//查询
export const list = () => {
  return axios({
      url: '/repairRegister/getRepairRegister',
      method: 'get'
  })
};

//搜索
export const searchRepairRegister = (inputValue) => {
    return axios({
        url: '/repairRegister/searchRepairRegister/' + inputValue,
        method: 'get'
    })
};

//更新
export const updateRepairRegister = (params) => {
    return axios({
        url: '/repairRegister/updateRepairRegister',
        method: 'post',
        params
    })
};

//新增
export const addRepairRegister = (params) => {
    return axios({
        url: '/repairRegister/addRepairRegister',
        method: 'post',
        params
    })
};

//删除
export const deleteRepairRegisterById = (id) => {
    return axios({
        url: '/repairRegister/deleteRepairRegisterById/' + id,
        method: 'get'
    })
};
