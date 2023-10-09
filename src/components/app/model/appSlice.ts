import {createSlice} from "@reduxjs/toolkit";
import {goodThunk} from "../../goods/good/model/goodSlice.ts";

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

type InitialStateType = {
  status: RequestStatusType
  error: string | null;
  isInitialized: boolean;
}
const initialState: InitialStateType = {
  status: "idle",
  error: null,
  isInitialized: false,
};

 const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setError: (state, action)=> {
      state.error = action.payload.error
    }
  },
  extraReducers: builder => {
    builder
      .addCase(goodThunk.getGood.pending, (state)=> {
        state.status = 'loading'
        return
      })
      .addCase(goodThunk.getGood.fulfilled, (state)=> {
        state.status = 'succeeded'
        return
      })
      .addCase(goodThunk.getGood.rejected, (state)=> {
        state.status = 'failed'
        return
      })
  }
})

export const appAction = slice.actions
export const appReducer = slice.reducer
