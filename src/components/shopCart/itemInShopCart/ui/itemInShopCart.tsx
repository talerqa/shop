import React from 'react';
import {CardType} from "../../../Items/item/model/itemSlice.ts";
import {shopCard} from "../model/shopCartSlice.ts";
import {useAppDispatch} from "../../../../hooks.ts";

type Props = {
  item: CardType

}

export const ItemInShopCart: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch()
  const {incrementCountCard, decrementCountCard, deleteItemFromCard} = shopCard
  const {item} = props

  const itemTotalCost = (item.count * item.price).toFixed(2)

  const incrementHandler = (id: number) => {
    dispatch(incrementCountCard({id}))
  }

  const decrementHandler = (id: number) => {
    dispatch(decrementCountCard({id}))
  }

  const deleteHandlerItemFromCart = (id: number) => {
    dispatch(deleteItemFromCard({id}))
  }

  return (
    <>
      <div>
        <div style={{display: 'flex'}}>
          <button onClick={() => decrementHandler(item.id)}>-</button>
          <p>amount count : {item.count}</p>
          <button onClick={() => incrementHandler(item.id)}>+</button>
        </div>
        <button onClick={() => deleteHandlerItemFromCart(item.id)}>DELETE</button>
        <p>{itemTotalCost}</p>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <img src={item.img} alt=""/>
      </div>
    </>
  );
};

