import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {stateItems} from "../../../../state.ts";

export type CardType = {
  id: number,
  price: number,
  value: string,
  title: string,
  img: string,
  count: number
}
export type CardState = CardType[]
const initialState: CardState = stateItems

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
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
  },
})

export const cardData = slice.actions

export const counterReducer = slice.reducer