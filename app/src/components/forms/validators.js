export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

export const loginPassword = value => {
  if (value === undefined) {
    return 'Password required'
  }
  
  return value.length < 5 ? 'Password required' : undefined
}

export const taskName = value => {
  if (value === undefined || String(value).length < 2) {
    return 'Must be more than 2 characters'
  }

  if (String(value).length > 32) {
    return 'Must be less than 32 characters'
  }

  return undefined
}

export const name = value => {
  if (value === undefined || String(value).length <= 1) {
    return 'Must be more than 1 character'
  }

  if (String(value).length > 32) {
    return 'Must be less than 32 characters'
  }

  return undefined
}

export const password = value => {
  if (value === undefined || String(value).length < 8) {
    return 'Must be 8 characters or more'
  }

  return undefined
}