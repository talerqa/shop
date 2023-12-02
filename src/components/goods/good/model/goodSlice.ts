import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppDispatch, AppRootStateType} from "@/store.ts";
import {productsApi, ProductType} from "@/components/goods/good/api/api.ts";

type InitType = {
  productType: ProductType[]
  title: string
  status: 'loading' | 'idle' | 'success'
}
const initialState: InitType = {
  productType: [],
  title: '',
  status: 'idle'
}
export const slice = createSlice({
  name: 'getGoods',
  initialState,
  reducers: {
    incrementCountCard: (state, action: PayloadAction<{
      id: number,
      count: number
    }>) => {
      const index = state.productType.findIndex((card) => card.id === action.payload.id)
      const card = state.productType[index]
      card.count += action.payload.count
    },
    setCountCard: (state, action: PayloadAction<{
      id: number,
      value: number
    }>) => {
      const index = state.productType.findIndex((card) => card.id === action.payload.id)
      const card = state.productType[index]
      card.count = action.payload.value - 1
    },
    decrementCountCard: (state, action: PayloadAction<{
      id: number,
      count: number
    }>) => {
      const index = state.productType.findIndex((card) => card.id === action.payload.id)
      const card = state.productType[index]
      if (card.count > 1) {
        card.count -= action.payload.count
      } else {
        card.count = 1
      }
    },
    resetDefaultValueItem: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.productType.findIndex((card) => card.id === action.payload.id)
      const card = state.productType[index]
      card.count = 1
    },
    setName: (state, action: PayloadAction<{ title: string }>) => {
      state.title = action.payload.title
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getGood.fulfilled, (state, action: PayloadAction<{
        goods: ProductType[]
      }>) => {
        state.productType = action.payload.goods
      })
      .addCase(getGoodByName.pending, (state) => {
          state.status = 'loading'
        }
      )
      .addCase(getGoodByName.fulfilled, (state, action: PayloadAction<{
        goods: ProductType[]
      }>) => {
        state.productType = action.payload.goods
        state.status = 'success'
      })
  }
})

export const createAppAsyncThunk = createAsyncThunk.withTypes<ConfigThunk>();

export type ConfigThunk = {
  state: AppRootStateType;
  dispatch: AppDispatch;
  rejectValue: null | any;
}

export const getGood = createAppAsyncThunk<{
  goods: ProductType[]
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

export const getGoodByName = createAppAsyncThunk<
  { goods: ProductType[] }, {
  title: string
}>('getGoods/findGoodByName',
  async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
      const res: any = await productsApi.findProductByName(arg.title)

      return {goods: res.data}
    } catch (e) {
      return rejectWithValue(null)
    }
  })


export const goodThunk = {getGood}
export const goodData = slice.actions
export const goodState = slice.reducer