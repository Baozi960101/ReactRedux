import { configureStore } from '@reduxjs/toolkit'
import counterRedcuer  from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter:counterRedcuer,
  },
})