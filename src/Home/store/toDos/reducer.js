import * as Types from './actionTypes'

const INITIAL_STATE = {
  toDos: []
}

const toDosReducer = (state = INITIAL_STATE, action={}) => {
  switch (action.type) {
    case Types.SET_TODOS: {
      const { payload: toDos } = action

      return {
        ...state,
        toDos
      }
    }

    default:
      return state
  }
}

export default toDosReducer
