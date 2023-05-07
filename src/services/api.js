import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:7023/api/Customer/create'
})

export default api