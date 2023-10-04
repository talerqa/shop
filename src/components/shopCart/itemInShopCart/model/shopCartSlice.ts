import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CardType} from "../../../Items/item/model/itemSlice.ts";

const initialState: CardType[] = []

const slice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addCardInShop: (state, action: PayloadAction<any>) => {
      if (action.payload.count === 0) {
        return
      }
      const newState = [...state];
      newState.push(action.payload)
      const outputArray: CardType[] = [];
      newState.forEach((item: CardType) => {
        const card = outputArray.find((outputItem: any) => outputItem.id === item.id);
        if (card) {
          card.count += item.count;
        } else {
          outputArray.push({
            id: item.id,
            title: item.title,
            count: item.count,
            img: item.img,
            value: item.value,
            price: item.price,
          });
        }
      })
      return outputArray
    },
    incrementCountCard: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.findIndex((card) => card.id === action.payload.id)
      const card = state[index]
      card.count += 1
    },
    decrementCountCard: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.findIndex((card) => card.id === action.payload.id)
      const card = state[index]
      if (card.count > 0) {
        card.count -= 1
      } else {
        card.count = 0
      }
    },
    deleteItemFromCard: (state, action: PayloadAction<any>)=> {
      const index = state.findIndex((card) => card.id === action.payload.id)
      if (index !== -1) state.splice(index, 1);
    }
  },

})

export const shopCard = slice.actions

export const shopCardReducer = slice.reducer