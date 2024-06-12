
const initialState = {
  token: '',
  isLoading: false,
  alertType: 'info',
  resultMessage: '',
}

export default function appReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'alert':
      return {
        ...state,
        alertType: action.payload.type,
        resultMessage: action.payload.message
      }
    case 'loading':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'token':
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}