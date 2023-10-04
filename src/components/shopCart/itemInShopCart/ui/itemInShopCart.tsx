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

  console.log(Number(itemTotalCost) + 10000000)
  console.log(stateShop)
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

