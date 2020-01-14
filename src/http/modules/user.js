import axios from '../axios'

//登录
export const login = (params) => {
    return axios({
        url: '/user/login',
        method: 'post',
        params
    })
};

//注册
export const registerUser = (params) => {
    return axios({
        url: '/user/registerUser',
        method: 'post',
        params
    })
};

//获取验证码
export const getVerificationCode = (userEmail) => {
    return axios({
        url: '/user/getVerificationCode/' + userEmail,
        method: 'get'
    })
};

//修改密码
export const updateUser = (params) => {
    return axios({
        url: '/user/updateUser',
        method: 'post',
        params
    })
};

//上传图片
export const uploadWork = (params) => {
    return axios({
        url: '/user/updateUser',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params
    })
};
