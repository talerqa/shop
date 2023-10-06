import {createSlice, PayloadAction} from '@reduxjs/toolkit'


const initialState = {
  totalCount: 0,
  totalValue: 'rub',
  totalCost: 0,
}

const slice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    setTotalCount: (state, action: PayloadAction<{ totalCount: number }>) => {
      state.totalCount = action.payload.totalCount
    },
    setTotalCost: (state, action: PayloadAction<{ totalCost: number }>) => {
      state.totalCost = action.payload.totalCost
    }
  },
})

export const goodsInShopCart = slice.actions

export const goodsInShopCartState = slice.reducer