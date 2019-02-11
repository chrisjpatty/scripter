import { useEffect } from 'react'

export default ({keyCode, action}) => {
  useEffect(() => {
    enable()
    return () => {
      disable()
    }
  }, [keyCode])

  const enable = () => {
    document.addEventListener('keyup', handleAction)
  }

  const disable = () => {
    document.removeEventListener('keyup', handleAction)
  }

  const handleAction = e => {
    e.preventDefault()
    action(e)
  }

  return {enable, disable}
}
