import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppDispatch, RootState} from "@/store.ts";
import {productsApi} from "@/components/goods/good/api/api.ts";

export type CardType = {
  id: number,
  price: number,
  value: string,
  title: string,
  img: string,
  count: number,
  description: string,
}

const initialState: CardType[] = []

export const slice = createSlice({
  name: 'getGoods',
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
  extraReducers: builder => {
    builder
      .addCase(getGood.fulfilled, (_: any, action: PayloadAction<{
        goods: CardType[]
      }>) => {
        return action.payload.goods
      })
  }
})

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: any;
}>();

export const getGood = createAppAsyncThunk<{
  goods: CardType[]
}, void>('getGoods/fetchGood',
  async (_: any, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
      const products = await productsApi.getProducts()
      return {goods: products.data}
    } catch (e) {
      return rejectWithValue(null)
    }
  }
)

export const goodThunk = {getGood}
export const goodData = slice.actions
export const goodState = slice.reducer