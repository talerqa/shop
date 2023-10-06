import React from "react";
import {itemData, CardType} from "../model/itemSlice.ts";
import {useAppDispatch} from "../../../../hooks.ts";
import {shopCart} from "../../../shopCart/shopCart/model/shopCartSlice.ts";

type Props = {
  card: CardType
}
export const Item: React.FC<Props> = (props) => {
  const {incrementCountCard, decrementCountCard,resetDefaultValueItem} = itemData
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
    dispatch(  resetDefaultValueItem({id: data.id}))
  }
  return (<div style={{border: '1px solid red'}}>
      <img src={card.img} alt="image-item"/>
      <span>{card.price} </span>
      <span>{card.value}</span>
      <p>{card.title}</p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={() => decrementHandler(card.id)}>-</button>
        <p>{card.count}</p>
        <button onClick={() => incrementHandler(card.id)}>+</button>
      </div>
      <button onClick={() => addCardInShopCart(
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
};

