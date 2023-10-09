import {configureStore} from '@reduxjs/toolkit'
import {goodState} from "./components/goods/good/model/goodSlice.ts";
import {
  shopCartReducer
} from "./components/shopCart/shopCart/model/shopCartSlice.ts";
import {
  goodsInShopCartState
} from "./components/shopCart/goodInShopCart/model/goodnShopCartSlice.ts";
import {appReducer} from "./components/app/model/appSlice.ts";


export const store = configureStore({
  reducer: {
    goodState,
    shopCartReducer,
    goodsInShopCartState,
    appReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store;