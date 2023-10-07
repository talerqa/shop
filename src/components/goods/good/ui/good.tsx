import React from "react";
import {CardType, goodData} from "../model/goodSlice.ts";
import {useAppDispatch} from "../../../../hooks.ts";
import {shopCart} from "../../../shopCart/shopCart/model/shopCartSlice.ts";
import s from './good.module.scss'

type Props = {
  card: CardType
}
export const Good: React.FC<Props> = React.memo((props) => {
  const {
    incrementCountCard,
    decrementCountCard,
    resetDefaultValueItem
  } = goodData
  const {addCardInShop} = shopCart

  const dispatch = useAppDispatch()
  const {card} = props
  const incrementHandler = (id: number) => {
    dispatch(incrementCountCard({id}))
  }

  const decrementHandler = (id: number) => {
    dispatch(decrementCountCard({id}))
  }
  const addCardInShopCart = (data: CardType) => {
    dispatch(addCardInShop(data))
    dispatch(resetDefaultValueItem({id: data.id}))
  }

  return (<div className={s.good}>
      <img src={card.img} className={s.goodImg} alt="image-item"/>
      <p className={s.titleGood}>{card.title}</p>
      <div className={s.priceBlock}>
        <p className={s.price}>{card.price} </p>
        <p className={s.value}>{card.value}</p>
      </div>
      <div className={s.buttonsCount}>
        <button  className={s.buttonCount} onClick={() => decrementHandler(card.id)}>-</button>
        <p className={s.count}>{card.count}</p>
        <button className={s.buttonCount} onClick={() => incrementHandler(card.id)}>+</button>
      </div>
      <button className={s.buttonAddGood} onClick={() => addCardInShopCart(
        {
          id: card.id,
          img: card.img,
          price: card.price,
          title: card.title,
          count: card.count,
          value: card.value
        })}>add to
        card
      </button>
    </div>
  );
})

