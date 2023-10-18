import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {goodThunk} from "@/components/goods/good/model";

export type RequestStatusType = "idle" | "pending" | "fulfilled" | "rejected";

type InitialStateType = {
  status: RequestStatusType
  error: string | null;
}
const initialState: InitialStateType = {
  status: "idle",
  error: null,
};

 const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<{error: string | null}>)=> {
      state.error = action.payload.error
    }
  },
  extraReducers: builder => {
    builder
      .addCase(goodThunk.getGood.pending, (state)=> {
        state.status = 'pending'
      })
      .addCase(goodThunk.getGood.fulfilled, (state)=> {
        state.status = 'fulfilled'
      })
      .addCase(goodThunk.getGood.rejected, (state)=> {
        state.status = 'rejected'
      })
  }
})

export const appAction = slice.actions
export const appReducer = slice.reducer
