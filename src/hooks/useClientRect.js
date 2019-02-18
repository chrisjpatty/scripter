import { useRef, useEffect, useState } from 'react'

export default (watchers=[]) => {
  const ref = useRef(null)
  const [rect, setRect] = useState(null)

  useEffect(() => {
    if(ref.current){
      const rect = ref.current.getBoundingClientRect()
      setRect(rect)
    }else{
      setRect(null)
    }
  }, [ref.current, ...watchers])

  return [rect, ref]
}
