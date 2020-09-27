import axios from 'axios'
export function request(config) {
    //1.创建实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/h8',
        timeout: 5000
    })
    //2.请求拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
    })
    //3.响应拦截器
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        return console.log(err);
    })
    //4.发送网络请求
    return instance(config);
}