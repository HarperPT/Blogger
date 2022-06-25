import axios from 'axios'
import './user'

export const DOMAIN = "http://yuri-w.net"

axios.defaults.baseURL = DOMAIN
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
