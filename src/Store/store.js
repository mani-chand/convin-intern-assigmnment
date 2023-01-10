import { configureStore } from '@reduxjs/toolkit'
import cardsReducer  from './actions'
export const store = configureStore({
  reducer: {
    cards:cardsReducer,
  },
})