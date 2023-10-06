
import {NavLink} from "react-router-dom";
import {CartShop} from "../../../assets/img/ui/cartShop.tsx";
import s from "../../../assets/img/ui/cartShop.module.scss";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {
  dataItemsInCart
} from "../../shopCart/itemInShopCart/model/itemInShopCartSlice.ts";

export const Menu = () => {
  const state = useAppSelector((state) => state.shopCartReducer)
  const {setTotalCount} = dataItemsInCart

  const dispatch = useAppDispatch()

  let totalCountValue: number = 0
  state.forEach(item => {
    totalCountValue += item.count
  })
  dispatch(setTotalCount({totalCount: totalCountValue}))

  return (
    <div>
      <NavLink to={'items'}> Товары
      </NavLink>
      <NavLink to={'cart'}>
        <CartShop/>
        <p className={s.ellipce}>{totalCountValue}</p>
      </NavLink>
    </div>
  );
};

