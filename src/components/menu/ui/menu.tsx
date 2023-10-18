import {NavLink} from "react-router-dom";
import {CartShopImg} from "@/assets/img/cartShop/cartShopImg.tsx";
import s from './menu.module.scss';
import {useAppDispatch, useAppSelector} from "@/hooks/rtkHooks";
import {
  goodsInShopCart
} from "../../shopCart/goodInShopCart/model/goodnShopCartSlice.ts";
import {useEffect} from "react";

export const Menu = () => {

  const {setTotalCount} = goodsInShopCart
  const totalCount = useAppSelector((state) =>
    state.goodsInShopCartState.totalCount)
  const state = useAppSelector((state) => state.shopCartReducer)

  let totalCountValue: number = 0
  state.forEach(item => {
    totalCountValue += item.count
  })
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setTotalCount({totalCount: totalCountValue}))
  }, [totalCountValue])

  return (<div className={s.menu}>
    <NavLink to={'goods'} className={s.title}> Orders </NavLink>
    <NavLink to={'shop-cart'} className={s.shop}>
      <CartShopImg/>
      <span className={s.ellipse}>{totalCount}</span>
    </NavLink>
  </div>);
};

