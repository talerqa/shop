import React from 'react';
import {CardType} from "../../../goods/good/model/goodSlice.ts";
import {shopCart} from "../../shopCart/model/shopCartSlice.ts";
import {useAppDispatch} from "../../../../hooks.ts";
import s from './goodInshopCart.module.scss'
import {NavLink} from "react-router-dom";

type Props = {
  item: CardType
}

export const GoodInShopCart: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch()
  const {incrementCountCard, decrementCountCard, deleteItemFromCard} = shopCart
  const {item} = props

  const incrementHandler = (id: number) => {
    dispatch(incrementCountCard({id}))
  }

  const decrementHandler = (id: number) => {
    dispatch(decrementCountCard({id}))
  }

  const deleteHandlerItemFromCart = (id: number) => {
    dispatch(deleteItemFromCard({id}))
  }

  if (item.count === 0) {
    dispatch(deleteItemFromCard({id: item.id}))
  }

  return (<div className={s.goodShopCart}>
    <button onClick={() => deleteHandlerItemFromCart(item.id)}
            className={s.buttonDelete}>
      <svg className={s.imgDelete} viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
           strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#1C274C"
                  strokeWidth="1.5"></circle>
          <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                stroke="#1C274C" strokeWidth="1.5"
                strokeLinecap="round"></path>
        </g>
      </svg>
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
  </div>)
    ;
};

