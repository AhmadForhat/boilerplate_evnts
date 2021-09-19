import api from 'App/api'

const services = {
  fetchData: () => api.get('/'),
}

export default services
