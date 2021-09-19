import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as Types from './actionTypes'

const useUser = () => {
  const dispatch = useDispatch()

  const setUser = useCallback((user) => dispatch({
      type: Types.SET_USER,
      payload: user
    }),[dispatch])

    return {
      setUser
    }
}

export default useUser
