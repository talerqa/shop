import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ProductType} from "@/components/goods/good/api/api.ts";

const initialState: ProductType[] = JSON.parse(localStorage.getItem('goodsInCart') || '[]')?.length
  ? JSON.parse(localStorage.getItem('goodsInCart') || '[]')
  : []

const slice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addCardInShop: (state, action: PayloadAction<ProductType>) => {
      if (action.payload.count === 0) {
        return
      }
      const newState = [...state];
      newState.push(action.payload)
      const outputArray: ProductType[] = [];
      newState.forEach((item: ProductType) => {
        const card = outputArray.find(outputItem => outputItem.id === item.id);
        if (card) {
          card.count += item.count;
        } else {
          outputArray.push({
            id: item.id,
            title: item.title,
            count: item.count,
            description: item.description,
            img: item.img,
            value: item.value,
            price: item.price,
          });
        }
      })
      localStorage.setItem('goodsInCart', JSON.stringify(outputArray))
      return outputArray
    },
    incrementCountCard: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.findIndex((card) => card.id === action.payload.id)
      const card = state[index]
      card.count += 1
      localStorage.setItem('goodsInCart', JSON.stringify(state))
    },
    decrementCountCard: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.findIndex((card) => card.id === action.payload.id)
      const card = state[index]
      if (card.count > 0) {
        card.count -= 1
      } else {
        card.count = 0
      }
      localStorage.setItem('goodsInCart', JSON.stringify(state))
    },
    deleteItemFromCard: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.findIndex((card) => card.id === action.payload.id)
      if (index !== -1) state.splice(index, 1);
      localStorage.setItem('goodsInCart', JSON.stringify(state))
    },
    deleteAllItemsFromCart: () => {
      return []
    }
  },
})

export const shopCart = slice.actions

export const shopCartReducer = slice.reducer