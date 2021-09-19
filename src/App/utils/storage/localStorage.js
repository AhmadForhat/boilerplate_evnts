export const saveStorage = (name, value) => window.localStorage.setItem(name, value)
export const getStorage = (name) => window.localStorage.getItem(name)
export const removeStorage = (name) => window.localStorage.removeItem(name)
