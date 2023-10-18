import {useEffect} from "react";
import {CardType} from "@/components/goods/good/model";
import {useAppDispatch, useAppSelector} from "@/hooks/rtkHooks";
import {
  goodsInShopCart
} from "@/components/shopCart/goodInShopCart/model/goodnShopCartSlice.ts";
import {shopCart} from "@/components/shopCart/shopCart/model";
import {GoodInShopCart} from "@/components/shopCart/goodInShopCart/ui";
import s from './shopCart.module.scss'

export const ShopCart = () => {
  const stateShop = useAppSelector((state) => state.shopCartReducer)
  const totalValue = useAppSelector((state) => state.goodsInShopCartState.totalValue)
  const {setTotalCost} = goodsInShopCart
  const {deleteAllItemsFromCart} = shopCart
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setTotalCost({totalCost: totalItemsCostParse}))
  }, [])

  let totalItemsCost = stateShop.reduce((a: any, b: any, index) => {
    if (index === 0) {
      return parseFloat((b.count * b.price).toFixed(2))
    } else {
      return Number(a) + parseFloat((b.count * b.price).toFixed(2));
    }
  }, 0)

  let totalItemsCostParse = parseFloat((totalItemsCost / 1).toFixed(2));

  const resetCartHandler = () => {
    dispatch(deleteAllItemsFromCart())
  }

  return (<div className={s.shopCart}>
      <button onClick={resetCartHandler}>Reset cart shop</button>
      <p className={s.totalCostTitle}>TOTAL COST:
        <span className={s.totalCost}> {totalItemsCostParse} {totalValue}</span>
      </p>
      <div className={s.shopCartBlock}>
        {stateShop.map((item: CardType, index) => {
          return <GoodInShopCart item={item} key={index}/>
        })}
      </div>
    </div>
  );
};

