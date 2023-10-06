import {configureStore} from '@reduxjs/toolkit'
import {itemReducer} from "./components/Items/item/model/itemSlice.ts";
import {
  shopCartReducer
} from "./components/shopCart/shopCart/model/shopCartSlice.ts";
import {
  dataItemsInCartReducer
} from "./components/shopCart/itemInShopCart/model/itemInShopCartSlice.ts";

export const store = configureStore({
  reducer: {
    itemReducer,
    shopCartReducer,
    dataItemsInCartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store;