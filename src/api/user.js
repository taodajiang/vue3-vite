import axios from 'axios'
import api from './api'

export default {
  // test
  test(params) {
    return axios.get(`${api.test}`, { params: params })
  }
}

