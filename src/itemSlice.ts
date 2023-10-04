import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import image from './assets/img/item10.png'


export type CardType = {
  id: number,
  price: number,
  value: string,
  title: string,
  img: string,
  count: number
}
export type CardState = CardType[]

const initialState: CardState = [
  {
    id: 1,
    price: 10,
    value: 'руб',
    title: "Bear",
    img: image,
    count: 1,
  },
  {
    id: 2,
    price: 20,
    value: 'руб',
    title: "Lay's",
    img: image,
    count: 1,
  },
  {
    id: 3,
    price: 30,
    value: 'руб',
    title: "Coca-Cola",
    img: image,
    count: 1,
  },
  {
    id: 4,
    price: 40,
    value: 'руб',
    title: "Snickers",
    img: image,
    count: 1,
  },
]

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