import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getDocs} from "firebase/firestore";
import {colRef} from "../../../../firebase.ts";
import {AppDispatch, RootState} from "../../../../store.ts";
import {appAction} from "../../../app/model/appSlice.ts";

export type CardType = {
  id: number,
  price: number,
  value: string,
  title: string,
  img: string,
  count: number
}
export type CardStateType = CardType[]
const initialState: CardStateType = []

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
  goods: CardStateType
}, {}>('getGoods/fetchGood',
  async (_, thunkAPI) => {
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
      return {goods: array[0].shopItems}
    } catch (e) {
      return rejectWithValue(null)
    }
  }
)

export const goodThunk = {getGood}
export const goodData = slice.actions
export const goodState = slice.reducer