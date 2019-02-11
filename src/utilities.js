export const objToArr = obj => (
  Object.values(obj).reduce((acc, v) => ([...acc, v]),[])
)
