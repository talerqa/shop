import {NavLink} from "react-router-dom";
import {CartShopImg} from "../../../assets/img/ui/cartShopImg.tsx";
import s from "../../../assets/img/ui/cartShop.module.scss";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {
  goodsInShopCart
} from "../../shopCart/goodInShopCart/model/goodnShopCartSlice.ts";

export const Menu = () => {
  const state = useAppSelector((state) => state.shopCartReducer)
  const totalCount = useAppSelector((state) => state.goodsInShopCartState.totalCount)
  const {setTotalCount} = goodsInShopCart
  const dispatch = useAppDispatch()

  let totalCountValue: number = 0
  state.forEach(item => {
    totalCountValue += item.count
  })

  dispatch(setTotalCount({totalCount: totalCountValue}))

  return (<div className={s.menu}>
    <NavLink to={'goods'}> Товары
    </NavLink>
    <NavLink to={'shop-cart'}>
      <CartShopImg/>
      <span className={s.ellipce}>{totalCount}</span>
    </NavLink>
  </div>);
};

