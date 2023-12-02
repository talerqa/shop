import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../../../model/goodSlice.ts";
import {productsApi, ProductType} from "@/components/goods/good/api/api.ts";

type RequestState = 'pending' | 'fulfilled' | 'rejected'

const initialState: any = {
  infoGoods: [] as ProductType[],
  status: '' as RequestState,
}
export const slice = createSlice({
  name: 'infoGood',
  initialState,
  reducers: {
    clearData: (state) => {
      state.infoGoods = []
    }
  },
  extraReducers: builder => {
    builder
      .addCase(infoGoodSlice.pending, (state: any) => {
        state.status = 'pending'
      })
      .addCase(infoGoodSlice.fulfilled, (state: any, action: PayloadAction<any>) => {
        state.status = 'fulfilled'
        state.infoGoods = [action.payload]
      })
      .addCase(infoGoodSlice.rejected, (state: any) => {
        state.status = 'rejected'
      })
  }
})

export const infoGoodSlice = createAppAsyncThunk<any, any>('getInfoGoods/fetchOneGood',
  async (arg, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
      const products = await productsApi.getProductById(Number(arg.id))
      return products.data
    } catch (e) {
      return rejectWithValue(null)
    }
  }
)

export const infoGoodThunk = {infoGoodSlice}
export const infoGoodData = slice.actions
export const infoGoodState = slice.reducer