import {ShopCart} from "./components/shopCart/shopCart/ui/shopCart.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {Menu} from "./components/menu/ui/menu.tsx";
import s from './App.module.scss'
import {ErrorPage} from "./components/error/errorPage/ErrorPage.tsx";
import {Goods} from "./components/goods/ui/goods.tsx";
import {useEffect} from "react";
import {goodThunk} from "./components/goods/good/model/goodSlice.ts";
import {useAppDispatch, useAppSelector} from "./hooks.ts";
import {InfoGood} from "./components/goods/good/ui/infoGood/ui/infoGood.tsx";

function App() {
  const dispatch = useAppDispatch()
  const {getGood} = goodThunk
  const state = useAppSelector(state => state.goodState)
  useEffect(() => {
    dispatch(getGood({}))
  }, [])

  return (<div className={s.app}>
      <div className={s.container}>
        <Menu/>
        <div className={s.appBlock}>
          <Routes>
            <Route path={'/'} element={<Navigate to={'goods'}/>}/>
            <Route path={'goods'} element={<Goods/>}/>
            <Route path={`goods/:id/*`} element={<InfoGood state={state}/>}/>
            <Route path={'shop-cart'} element={<ShopCart/>}/>
            <Route path={'*'} element={<Navigate to={'error'}/>}/>
            <Route path={'error'} element={<ErrorPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
