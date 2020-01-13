import axios from 'axios'
import config from './config'
import { Loading } from 'element-ui'
import qs from 'qs'

export default function $axios (options) {
    let loading = null;
    return new Promise((resolve, reject) => {
        const service = axios.create({
            baseURL: config.baseURL,
            headers: {}
        });

        // request拦截器
        service.interceptors.request.use(
            config => {

                // let token = Cookies.get('token')
                // 1.loading动画
                loading = Loading.service({
                    text: '正在加载中......',
                    fullscreen: true,
                    background: 'rgba(0, 0, 0, 0.8)'
                });
                // 2. 带上token
                // if (token) {
                //     config.headers.token = token
                // } else {
                //     // 重定向到登录页面
                //     router.push('/login')
                // }
                // 3. 根据请求方法，序列化传来的参数，根据后端需求是否序列化
                if (config.method === 'post' || config.method === 'put') {
                    config.data = qs.stringify(config.data)
                }
                return config
            },
            error => {
                return Promise.reject(error)
            }
        );

        // response拦截器
        service.interceptors.response.use(
            response => {
                // console.log(response)
                return new Promise((resolve, reject) => {
                    // 请求成功后关闭加载框
                    if (loading) {
                        loading.close()
                    }
                    const res = response
                    if (res.status === 200) {
                        resolve(res)
                    } else {
                        reject(res)
                    }
                    // if (res.code === 200) {
                    //     resolve(res)
                    // } else {
                    //     reject(res)
                    // }
                })
            },
            error => {
                // console.log('Response Error：', error.response)
                // 请求成功后关闭加载框
                if (loading) {
                    loading.close()
                }
                // 断网处理或者请求超时
                if (!error.response) {
                    // 请求超时
                    if (error.message.includes('timeout')) {
                        console.log('超时了')
                    } else {
                        // 断网，可以展示断网组件
                        console.log('断网了')
                    }
                    return
                }
                const status = error.response.status
                switch (status) {
                    case 500:
                        break
                    case 404:
                        break
                    case 401:
                        // localStorage.removeItem('token')
                        // setTimeout(() => {
                        //     router.replace({
                        //         path: '/login',
                        //         query: {
                        //             redirect: router.currentRoute.fullPath
                        //         }
                        //     })
                        // }, 1000)
                        break
                    case 400:
                        break
                    default:
                }
                return Promise.reject(error.response)
            }
        )

        // 请求处理
        service(options)
            .then(res => {
                resolve(res)
                return false
            })
            .catch(error => {
                reject(error)
            })
    })
}
