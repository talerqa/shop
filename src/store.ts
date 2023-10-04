import {configureStore} from '@reduxjs/toolkit'
import {counterReducer} from "./itemSlice.ts";


export const store = configureStore({
  reducer: {
    counterReducer: counterReducer
  }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store;