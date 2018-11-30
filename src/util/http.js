import axios from 'axios'
// import qs from 'qs'

// let config
let http

const endpoint = 'https://cosmos-d63ab.firebaseio.com/subscribers.json';

export default {

  get () {
    http = axios.create({
      // baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache': 'no-cache',
        'Authorization': 'none'
      },
      credentials: 'same-origin'
    })

    return http.get(endpoint)
  },

  post (payLoad) {
    http = axios.create({
      // baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache': 'no-cache',
        'Authorization': 'none'
      },
      // credentials: 'same-origin'
    })
    let data = {
      'id': payLoad.id,
      'firstName': payLoad.firstName,
      'lastName': payLoad.lastName,
      'email': payLoad.email
    }
    return http.post(endpoint, data)
  }

}
