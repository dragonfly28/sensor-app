import axios from 'axios'

export default {

  getData () {
    return axios.get()
      .then(response => {
        return response.data
      })
  }
}