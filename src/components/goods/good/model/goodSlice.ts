import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {stateItems} from "../../../../state.ts";

import image1 from "./../../../../assets/img/item1.png.webp";
import {getDocs} from "firebase/firestore";
import {colRef} from "../../../../firebase.ts";
import {AppDispatch, RootState} from "../../../../store.ts";

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
 //const initialState: CardState = []

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
  extraReducers: builder =>{
    builder
      .addCase(getGood.fulfilled, (state, action) => {
        let a = state
        console.log(a)

        return action.payload.goods
      })}
})

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: null | any;
}>();

export const getGood = createAppAsyncThunk<any, any>('getGoods/fetchGood',
  async (state, thunkAPI) => {
  let array: any = []

    await getDocs(colRef)
      .then((res) => {
        res.docs.forEach((doc) => {
          array.push({...doc.data(), id: doc.id})
        })

        return array
      }).catch((err) => {
        return err.message
      })
    return {goods: array[0].shopItems}
  }
)

export const goodThunk = {getGood}
export const goodData = slice.actions
export const goodState = slice.reducer