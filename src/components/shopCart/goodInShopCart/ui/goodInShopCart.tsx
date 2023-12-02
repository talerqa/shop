import React, {memo} from 'react';
import {useAppDispatch} from "@/hooks/rtkHooks";
import {NavLink} from "react-router-dom";
import {DeleteSvg} from "@/assets/svgElements/deleteSvg.tsx";
import {shopCart} from "@/components/shopCart/shopCart/model";
import s from './goodInshopCart.module.scss'
import {ProductType} from "@/components/goods/good/api/api.ts";

type Props = {
  item: ProductType
}

export const GoodInShopCart: React.FC<Props> = memo((props) => {
  const dispatch = useAppDispatch()
  const {incrementCountCard, decrementCountCard, deleteItemFromCard} = shopCart
  const {item} = props

  const incrementHandler = (id: number) => {
    dispatch(incrementCountCard({id}))
  }

  const decrementHandler = (id: number) => {
    if (item.count > 1) {
      dispatch(decrementCountCard({id}))
    } else if (item.count === 1) {
      dispatch(deleteItemFromCard({id: item.id}))
    }
  }
  const deleteHandlerItemFromCart = (id: number) => {
    dispatch(deleteItemFromCard({id}))
  }

  return (<div className={s.goodInShopCart}>
    <button onClick={() => deleteHandlerItemFromCart(item.id)}
            className={s.buttonDelete}>
      <DeleteSvg className={s.imgDelete}/>
    </button>
    <NavLink to={`/goods/${item.id}`} className={s.goodBlock}>
      <img className={s.img} src={item.img} alt=""/>
      <p className={s.title}> {item.title}</p>
    </NavLink>
    <p className={s.price}> {item.price} <span>{item.value}</span></p>
    <div className={s.countBlock}>
      <button onClick={() => decrementHandler(item.id)}
              className={s.buttonInc}>-
      </button>
      <p className={s.count}> {item.count}</p>
      <button onClick={() => incrementHandler(item.id)}
              className={s.buttonDec}>+
      </button>
    </div>
  </div>);
})

