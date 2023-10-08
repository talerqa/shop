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
const initialState: CardState = [...stateItems]

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCountCard: (state, action: PayloadAction<{
      id: number,
      count: number
    }>) => {
      const index = state.findIndex((card) => card.id === action.payload.id)
      const card = state[index]
      card.count += action.payload.count
    },
    setCountCard: (state, action: PayloadAction<{
      id: number,
      value: number
    }>) => {
      const index = state.findIndex((card) => card.id === action.payload.id)
      const card = state[index]
      card.count = action.payload.value - 1
    },
    decrementCountCard: (state, action: PayloadAction<{
      id: number,
      count: number
    }>) => {
      const index = state.findIndex((card) => card.id === action.payload.id)
      const card = state[index]
      if (card.count > 1) {
        card.count -= action.payload.count
      } else {
        card.count = 1
      }
    },
    resetDefaultValueItem: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.findIndex((card) => card.id === action.payload.id)
      const card = state[index]
      card.count = 1
    }
  },
})

export const goodData = slice.actions
export const goodState = slice.reducer