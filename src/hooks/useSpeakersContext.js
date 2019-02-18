import { useContext } from 'react'
import { speakersContext, setSpeakersContext } from '../pages/Edit'

export default () => {
  const speakers = useContext(speakersContext)
  const setSpeakers = useContext(setSpeakersContext)

  return [speakers, setSpeakers]
}
