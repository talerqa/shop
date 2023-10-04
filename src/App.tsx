import './App.css'
import Items from "./components/Items/ui/items.tsx";
import ShopCart from "./components/shopCart/shopCart/ui/shopCart.tsx";
import {useAppSelector} from "./hooks.ts";


function App() {
  const stateShop = useAppSelector((state) => state.shopCardReducer)

  let totalItemsCost = stateShop.reduce((a: any, b: any, index) => {
    if (index === 0) {
      return parseFloat((b.count * b.price).toFixed(2))
    } else {
      console.log(a, b)
      return Number(a) + parseFloat((b.count * b.price).toFixed(2));
    }
  }, 0)
  let totalItemsCostParse = parseFloat((totalItemsCost / 1).toFixed(2));

  return (<div>
      <ShopCart/>
      <p>{totalItemsCostParse}</p>
      <hr/>
      <Items/>
    </div>
  )
}

export default App
