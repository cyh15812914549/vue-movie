import Vue from "vue";
//本地
let baseUrl = 'api';

//上线
// let baseUrl = '';
Vue.prototype.$baseUrl =  baseUrl ;

export default {
    method: 'get',
    // 基础url前缀
    baseURL: baseUrl,
    // 请求头信息
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    },
    // 参数
    data: {},
    // 设置超时时间
    timeout: 10000,
    // 携带凭证
    withCredentials: true,
    // 返回数据类型
    responseType: 'json'
}

//上传图片时用
// export const returnUrl = () => {
//     return baseUrl;
// };
