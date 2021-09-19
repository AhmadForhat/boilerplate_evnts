import * as Types from './actionTypes'

const INITIAL_STATE = {
  user: {}
}

const toDosReducer = (state = INITIAL_STATE, action={}) => {
  switch (action.type) {
    case Types.SET_USER: {
      const { payload: user } = action

      return {
        ...state,
        user
      }
    }

    default:
      return state
  }
}

export default toDosReducer
