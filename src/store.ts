import {configureStore} from '@reduxjs/toolkit'
import {goodState} from "@/components/goods/good/model";
import {
  shopCartReducer
} from "@/components/shopCart/shopCart/model";
import {
  goodsInShopCartState
} from "./components/shopCart/goodInShopCart/model/goodnShopCartSlice.ts";
import {appReducer} from "./components/app/model/appSlice.ts";
import {
  infoGoodState
} from "./components/goods/good/ui/infoGood/model/infoGoodSlice.ts";

export const store = configureStore({
  reducer: {
    goodState,
    shopCartReducer,
    goodsInShopCartState,
    appReducer,
    infoGoodState
  }
})

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store;