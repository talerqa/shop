import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CardType, createAppAsyncThunk} from "../../../model/goodSlice.ts";
import {getDocs} from "firebase/firestore";
import {colRef} from "../../../../../../firebase.ts";
import {appAction} from "../../../../../app/model/appSlice.ts";

const initialState: CardType[] = []
console.log(initialState)
export const slice = createSlice({
  name: 'infoGood',
  initialState,
  reducers: {
    clearData: ()=> {
      return []
    }
  },
  extraReducers: builder => {
    builder
      .addCase(infoGoodSlice.fulfilled, (_: any, action: PayloadAction<any>) => {
        return action.payload.good
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