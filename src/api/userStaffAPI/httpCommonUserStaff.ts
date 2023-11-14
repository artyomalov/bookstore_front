import axios from 'axios'

const baseURL = 'http://localhost:8000/api/v1/staff/'

const options = {
    baseURL: baseURL,
}

const axiosInstanceUserStaff = axios.create(options);


export default axiosInstanceUserStaff