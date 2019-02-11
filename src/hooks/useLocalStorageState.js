import { useState } from 'react'
import ls from 'local-storage'

const getCache = (key, initial) => {
  const cached = ls.get(key)
  return cached !== null ? cached : initial
}

export default (key, initial) => {
  const [nativeState, setNativeState] = useState(getCache(key, initial))
  const setState = state => {
    if(typeof state === 'function'){
      setNativeState(prev => {
        const newState = state(prev)
        ls.set(key, newState)
        return newState
      })
    }else{
      ls.set(key, state)
      setNativeState(state)
    }
  }

  return [nativeState, setState]
}
