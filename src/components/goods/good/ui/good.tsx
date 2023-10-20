import {memo} from "react";
import s from './good.module.scss'
import {NavLink} from "react-router-dom";
import {AddToCart} from "@/components/goods/good/ui/addToCart/ui";
import {CardType} from "@/components/goods/good/model";

type Props = {
  card: CardType
}

export const Good: React.FC<Props> = memo(props => {

  const {card} = props

  return (<div className={s.good}>
      <NavLink to={`${card.id}`} className={s.goodBlock}>
        <img src={card.img} className={s.goodImg} alt="image-item"/>
        <p className={s.titleGood}>{card.title}</p>
      </NavLink>
      <div className={s.priceBlock}>
        <p className={s.price}>{card.price}</p>
        <p className={s.value}>{card.value}</p>
      </div>
      <AddToCart card={card}/>
    </div>
  );
})
