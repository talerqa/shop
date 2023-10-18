import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CardType, createAppAsyncThunk} from "../../../model/goodSlice.ts";
import {getDocs} from "firebase/firestore";
import {colRef} from "../../../../../../firebase.ts";
import {appAction} from "../../../../../app/model/appSlice.ts";

type RequestState = 'pending' | 'fulfilled' | 'rejected'

const initialState: any = {
  infoGoods: [] as CardType[],
  status: '' as  RequestState,
}
export const slice = createSlice({
  name: 'infoGood',
  initialState,
  reducers: {
    clearData: (state)=> {
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
        state.infoGoods = action.payload.good
      })
      .addCase(infoGoodSlice.rejected, (state: any) => {
        state.status = 'rejected'
      })
  }
})

export const infoGoodSlice = createAppAsyncThunk<any, any>('getInfoGoods/fetchOneGood',
  async (arg, thunkAPI) => {

    const {dispatch, rejectWithValue} = thunkAPI
    try {
      let array: any = []
      await getDocs(colRef).then((res) => {
        res.docs.forEach((doc) => {
          array.push({...doc.data(), id: doc.id})
        })
      }).catch((err) => {
        dispatch(appAction.setError(err.message))
        return err.message
      })
      let a = array[0].shopItems.find((item: CardType) => {
        if (item.id === +arg.id) {
          return item
        }
      })
      return {good: [a]}
    } catch (e) {
      return rejectWithValue(null)
    }
  }
)

export const infoGoodThunk = {infoGoodSlice}
export const infoGoodData = slice.actions
export const infoGoodState = slice.reducer