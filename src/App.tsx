import './App.module.scss'
import {Goods} from "./components/goods/ui/goods.tsx";
import {ShopCart} from "./components/shopCart/shopCart/ui/shopCart.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {Menu} from "./components/menu/ui/menu.tsx";
import s from './App.module.scss'
import {ErrorPage} from "./components/error/errorPage/ErrorPage.tsx";

function App() {
  return (<div className={s.app}>
      <Menu/>
      <div className={s.appBlock}>
        <Routes>
          <Route path={'/'} element={<Navigate to={'goods'}/>}/>
          <Route path={'goods'} element={<Goods/>}/>
          <Route path={'shop-cart'} element={<ShopCart/>}/>
          <Route path={'*'} element={<Navigate to={'error'}/>}/>
          <Route path={'error'} element={<ErrorPage/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
