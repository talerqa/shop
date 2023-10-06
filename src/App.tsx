import './App.css'
import Items from "./components/Items/ui/items.tsx";
import ShopCart from "./components/shopCart/shopCart/ui/shopCart.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {Menu} from "./components/menu/ui/menu.tsx";


function App() {
  return (<div>
      <Menu/>
      <div style={{display: 'flex'}}>
        <Routes>
          <Route path={'/'} element={<Navigate to={'items'}/>}/>
          <Route path={'items'} element={<Items/>}/>
          <Route path={'cart'} element={<ShopCart/>}/>
          <Route path={'*'} element={<Navigate to={'error'}/>}/>
          <Route path={'error'} element={<div>ERRRORPORR</div>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
