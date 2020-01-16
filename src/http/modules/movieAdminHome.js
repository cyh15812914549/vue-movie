import axios from '../axios'

//登录
export const login = (params) => {
    return axios({
        url: '/movieAdminHome/login',
        method: 'login'
    })
};
