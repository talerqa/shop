import './App.css'
import Items from "./components/Items/ui/items.tsx";
import ShopCart from "./components/shopCart/shopCart/ui/shopCart.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {CartShop} from "./assets/img/ui/cartShop.tsx";
import s from "./assets/img/ui/cartShop.module.scss";
import {useAppSelector} from "./hooks.ts";


function App() {

  const state = useAppSelector((state) => state.shopCardReducer)


  return (<div>
      <NavLink to={'items'}> Товары
      </NavLink>
      <NavLink to={'cart'}>
        <CartShop/>
        <p className={s.ellipce}></p>
      </NavLink>

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
