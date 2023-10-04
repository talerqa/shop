import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CardState} from "./itemSlice.ts";


const initialState: CardState = []

export const slice = createSlice({
  name: 'shopCart',
  initialState,
  reducers: {
    addCardInShop: (state, action: PayloadAction<any>) => {
      state.push(action.payload)
      const outputArray: any = [];
      state.forEach((item: any) => {
        const existingItem = outputArray.find((outputItem: any) => outputItem.id === item.id && outputItem.title === item.title);
        if (existingItem) {
          existingItem.count += item.count;
        } else {
          outputArray.push({ id: item.id, title: item.title, count: item.count });
        }
      });
      state = outputArray

      const getCurrentState = (state: any) => {
        try {
          return JSON.parse(JSON.stringify(state));
        } catch (e) {
          return null;
        }
      };
      console.log(getCurrentState(state))
    },
  },
})

export const shopCard = slice.actions

export const shopCardReducer = slice.reducer