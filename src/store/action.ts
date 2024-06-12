const loginFirebase = (email: string, password: string) => ({
  type: 'login',
  payload: {
    email,
    password
  }
})

const alert = (type: string, message: string) => ({
  type: 'alert',
  payload: {
    type: type,
    message: message
  }
})

const loading = (isLoading: Boolean) => ({
  type: 'loading',
  payload: {
    isLoading: isLoading
  }
})

const token = (token: string) => ({
  type: 'token',
  payload: token
})

export { loginFirebase }