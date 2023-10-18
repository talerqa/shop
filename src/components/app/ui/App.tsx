import {useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import s from './App.module.scss'
import {ShopCart} from "@/components/shopCart/shopCart/ui";
import {goodThunk} from "@/components/goods/good/model";
import {InfoGood} from "@/components/goods/good/ui/infoGood/ui";
import {useAppDispatch} from "@/hooks/rtkHooks";
import {ErrorPage} from "@/components/error/errorPage";
import {Menu} from "@/components/menu/ui";
import {Goods} from "@/components/goods/ui";

function App() {
  const dispatch = useAppDispatch()
  const {getGood} = goodThunk

  useEffect(() => {
    dispatch(getGood({}))
  }, [])

  return (<div className={s.app}>
      <div className={s.container}>
        <Menu/>
        <div className={s.appBlock}>
          <Routes>
            <Route path={'/'} element={<Navigate to={'goods'}/>}/>
            <Route path={'goods'} index element={<Goods/>}/>
            <Route path={`goods/:id`} element={<InfoGood/>}/>
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
