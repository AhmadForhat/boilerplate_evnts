import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as Types from './actionTypes'

const useToDos = () => {
  const dispatch = useDispatch()

  const setToDos = useCallback((toDos) => dispatch({
      type: Types.SET_TODOS,
      payload: toDos
    }),[dispatch])

    return {
      setToDos
    }
}

export default useToDos
