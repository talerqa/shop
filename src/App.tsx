import './App.css'
import {useAppDispatch, useAppSelector} from "./hooks.ts";
import {counterSlice} from "./cardSlice.ts";

function App() {
  const count = useAppSelector((state) => state.counterReducer.value)
  const dispatch = useAppDispatch()

  const {increment, decrement} = counterSlice.actions

  const addHandler = () => dispatch(increment())
  const decHandler = () => dispatch(decrement())

  return (
    <div>
      {count}
      <button onClick={decHandler}>-</button>
      <button onClick={addHandler}>+</button>


    </div>
  )
}

export default App
