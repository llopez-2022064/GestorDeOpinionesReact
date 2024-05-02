import axios from "axios"

//Configuraciones bases
const apiClient = axios.create({
    baseURL: 'http://localhost:3056',
    timeout: 5000
})

//Interceptores = middlware para agregar datos como headres
apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    err => Promise.reject(err)

)

export const loginRequest = async (user) => {
    try {
        return await apiClient.post('/login', user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const getPostsRequest = async () => {
    try {
        return await apiClient.get('/post/getPosts')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}