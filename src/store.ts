import {configureStore} from '@reduxjs/toolkit'
import {itemReducer} from "./components/Items/item/model/itemSlice.ts";
import {shopCardReducer} from "./components/shopCart/itemInShopCart/model/shopCartSlice.ts";

export const store = configureStore({
  reducer: {
    counterReducer: itemReducer,
    shopCardReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store;