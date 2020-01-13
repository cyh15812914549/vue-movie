import axios from '../axios'

//查询
export const list = () => {
  return axios({
      url: '/repairRegister/getRepairComplete',
      method: 'get'
  })
};

