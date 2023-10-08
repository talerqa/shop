import {NavLink} from "react-router-dom";
import {CartShopImg} from "../../../assets/img/ui/cartShopImg.tsx";
import s from './menu.module.scss';
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {
  goodsInShopCart
} from "../../shopCart/goodInShopCart/model/goodnShopCartSlice.ts";
import {useEffect} from "react";

export const Menu = () => {
  const state = useAppSelector((state) => state.shopCartReducer)
  const totalCount = useAppSelector((state) =>
    state.goodsInShopCartState.totalCount)
  const {setTotalCount} = goodsInShopCart
  const dispatch = useAppDispatch()

  let totalCountValue: number = 0
  state.forEach(item => {
    totalCountValue += item.count
  })

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

