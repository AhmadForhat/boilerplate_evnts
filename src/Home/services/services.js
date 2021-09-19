import api from 'App/api'

const services = {
  login: ({username, password}) => api.post('/login', {username, password}),
  createUser: ({username, email, password, confirmPassword}) => api.post('/create-user', {username, email, password, confirmPassword}),
  fetchToDos: () => api.get('/todos')
}

export default services
