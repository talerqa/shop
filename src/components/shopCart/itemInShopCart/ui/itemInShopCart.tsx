import React from 'react';
import {CardType} from "../../../Items/item/model/itemSlice.ts";

type Props = {
  item: CardType

}

export const ItemInShopCart: React.FC<Props> = (props) => {

  const {item} = props

  const itemTotalCost = (item.count * item.price).toFixed(2)


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

