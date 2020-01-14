import axios from '../axios'

//新增
export const addUserAvatar = (params) => {
    return axios({
        url: '/userAvatar/addUserAvatar',
        method: 'post',
        params
    })
};

//查询
export const selectUserAvatar = (username) => {
    return axios({
        url: '/userAvatar/selectUserAvatar/' + username,
        method: 'get'
    })
};

//修改
export const updateUserAvatar = (params) => {
    return axios({
        url: '/userAvatar/updateUserAvatar',
        method: 'post',
        params
    })
};
