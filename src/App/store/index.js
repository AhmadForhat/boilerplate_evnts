import { createStore, compose } from 'redux'

import rootReducer from './rootReducer'

const store = createStore(rootReducer, compose())

export default store
