import { getStorage, removeStorage } from 'App/utils/storage'

export const getAuthToken = () => getStorage('token')
export const removeAuthToken = () => removeStorage('token')
export const isAuthenticated = () => !!getAuthToken()
export const redirectToLogin = () => window.location.assign('/login')
