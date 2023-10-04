import React from 'react';
import {CardType} from "../../../Items/item/model/itemSlice.ts";
import {useAppSelector} from "../../../../hooks.ts";

type Props = {
  item: CardType
}

export const ItemInShopCart: React.FC<Props> = (props) => {

  const {item} = props
  const stateShop = useAppSelector((state) => state.shopCardReducer)

  const itemTotalCost = (item.count * item.price).toFixed(2)

  stateShop.reduce((a: any, b: any) => {
    return a + b
  }, 0)

  console.log(stateShop.reduce((a: any, b: any, index) => {
    if (index === 0) {
      return Number((b.count * b.price).toFixed(2))
    } else {
      debugger
      return Number(a) + Number((b.count * b.price).toFixed(2));
    }
  }, 0))



  return (
    <>
      <div>
        <p>amount count : {item.count}</p>
        <p>{itemTotalCost}</p>
        <p>{item.title}</p>
        <img src={item.img} alt=""/>
      </div>
    </>
  );
};

