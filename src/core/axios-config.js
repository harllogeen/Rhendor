import axios from 'axios'
// import cookies from 'js-cookie'
import { token } from './constants'
// 
let baseURL = 'https://myrhenda.com/api'
// if (process.env.NODE_ENV === "production") {
//     baseURL = "http://api.hrp.ng/api"
// } else {
//     baseURL = "http://127.0.0.1:8000/api"
// }

const instance = axios.create({
    baseURL
})
const t = sessionStorage.getItem(token)
instance.defaults.headers.common['Authorization'] = `Bearer ${t}`
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
instance.defaults.headers.common['Allow-Origin'] = 'true'
export default instance