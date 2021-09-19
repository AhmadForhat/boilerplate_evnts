import axios from 'axios'

import httpsCodes from 'App/enums/httpsCodes'
import { redirectToErrorPage } from 'App/utils/error'
import {
  getAuthToken,
  redirectToLogin,
  removeAuthToken
} from 'App/utils/auth'

axios.defaults.baseURL = process.env.REACT_APP_BASE_API || ''
axios.defaults.timeout = process.env.REACT_APP_REQUEST_TIMEOUT

export const addAuthorizationHeader = (config) => {
  const requestConfig = { ...config }

  requestConfig.headers.Authorization = getAuthToken()
}

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: process.env.REACT_APP_REQUEST_TIMEOUT,
})

api.interceptors.request.use(addAuthorizationHeader)

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status } = error.response
    const errorsPages = [httpsCodes.internalServerError]

    if(status === httpsCodes.unauthorized) {
      removeAuthToken()
      redirectToLogin()
    } else if(errorsPages.includes(status)) {
      redirectToErrorPage(status)
    }

    return Promise.reject(error)
  }
)

export default api
