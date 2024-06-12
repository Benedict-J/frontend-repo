import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './reducer'

const store = configureStore({
  reducer: combineReducers({
    app: appReducer
  })
})

export default store