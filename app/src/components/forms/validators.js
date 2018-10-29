export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

export const loginPassword = value => {
  if (value === undefined) {
    return 'Password required'
  }
  
  return value.length < 5 ? 'Password required' : undefined
}