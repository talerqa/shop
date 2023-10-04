import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CardType} from "../../../Items/item/model/itemSlice.ts";

type InitType = CardType & {total: number}

const initialState: InitType[] = []

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
      const outputArray: InitType[] = [];
      newState.forEach((item: InitType) => {
        const card = outputArray.find((outputItem: any) => outputItem.id === item.id);
        if (card) {
          card.count += item.count;
          card.total = Number((card.count * item.price).toFixed(2))
          debugger
        } else {
          outputArray.push({
            id: item.id,
            title: item.title,
            count: item.count,
            img: item.img,
            value: item.value,
            price: item.price,
            total: 0
          });
        }
      })
      return outputArray
    }
  }

})

export const shopCard = slice.actions

export const shopCardReducer = slice.reducer