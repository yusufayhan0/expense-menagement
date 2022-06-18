//[--] filters to preserve data integrity

export const expenses = (data) => {
  return data.filter(x => x.type === 'expense')
}

export const incomes = (data) => {
  return data.filter(x => x.type === 'income')
}

export const amount = (data) => {
  return data.map(x => x.amount)
}