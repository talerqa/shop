import React from "react";
import {CardType} from "../model/goodSlice.ts";
import s from './good.module.scss'
import {NavLink} from "react-router-dom";
import {AddToCart} from "./addToCart/ui/addToCart.tsx";

type Props = {
  card: CardType
  showModalHandler: (showModal: boolean) => void
}
export const Good: React.FC<Props> = React.memo(props => {

  const {card, showModalHandler} = props

  return (<div className={s.good}>
      <NavLink to={`${card.id}`} className={s.goodBlock}>
        <img src={card.img} className={s.goodImg} alt="image-item"/>
        <p className={s.titleGood}>{card.title}</p>
      </NavLink>
      <div className={s.priceBlock}>
        <p className={s.price}>{card.price}</p>
        <p className={s.value}>{card.value}</p>
      </div>
      <AddToCart card={card} showModalHandler={showModalHandler}/>
    </div>
  );
})
