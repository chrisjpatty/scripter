import shortid from 'shortid'

export const getNewBlock = () => ({
  text: '',
  id: shortid.generate()
})
