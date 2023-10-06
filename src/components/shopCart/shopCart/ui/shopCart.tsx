import {CardType} from "../../../goods/good/model/goodSlice.ts";

import {useAppDispatch, useAppSelector} from "../../../../hooks.ts";
import {
  goodsInShopCart
} from "../../goodInShopCart/model/goodnShopCartSlice.ts";
import {GoodInShopCart} from "../../goodInShopCart/ui/goodInShopCart.tsx";
import s from './shopCart.module.scss'

export const ShopCart = () => {
  const stateShop = useAppSelector((state) => state.shopCartReducer)

  const {setTotalCost} = goodsInShopCart

  const totalCost = useAppSelector((state) => state.goodsInShopCartState.totalCost)

  const dispatch = useAppDispatch()
  let totalItemsCost = stateShop.reduce((a: any, b: any, index) => {
    if (index === 0) {
      return parseFloat((b.count * b.price).toFixed(2))
    } else {
      return Number(a) + parseFloat((b.count * b.price).toFixed(2));
    }
  }, 0)
  let totalItemsCostParse = parseFloat((totalItemsCost / 1).toFixed(2));
  console.log(totalItemsCostParse)
  dispatch(setTotalCost({totalCost: totalItemsCostParse}))

  return (<div className={s.shopCart}>
      <p className={s.totalCostTitle}>TOTAL COST: <span className={s.totalCost}>{totalCost}</span></p>
      <div
        className={s.shopCartBlock}>{stateShop.map((item: CardType, index) => {
        return <GoodInShopCart item={item} key={index}/>
      })}
      </div>
    </div>
  );
};

