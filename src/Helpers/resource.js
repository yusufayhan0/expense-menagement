export const getParams = (params) => {
  let query = ''
  for (let key in params) {
    query += `${key}=${params[key]}&`
  }
  return query.slice(0, -1)
}