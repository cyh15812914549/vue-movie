import axios from '../axios'

//查询
export const list = (params) => {
    return axios({
        url: '/cominglist/getComingList',
        method: 'get'
    })
};
