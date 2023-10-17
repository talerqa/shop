import React, {ChangeEvent, useState} from "react";
import {CardType, goodData} from "../model/goodSlice.ts";
import {useAppDispatch} from "../../../../hooks.ts";
import {shopCart} from "../../../shopCart/shopCart/model/shopCartSlice.ts";
import s from './good.module.scss'
import {z, ZodError} from 'zod';
import {NavLink} from "react-router-dom";

type Props = {
  card: CardType
  showModalHandler: any
}
export const Good: React.FC<Props> = React.memo(props => {
  const {
    incrementCountCard,
    decrementCountCard,
    resetDefaultValueItem,
    setCountCard
  } = goodData
  const {addCardInShop} = shopCart
  const dispatch = useAppDispatch()
  const {card, showModalHandler} = props

  const [count, setCount] = useState<number>(card.count)

  if (count > 99) {
    setCount(99)
  }

  const numberStringSchema = z.string().refine((value) => /^[0-9]*$/.test(value), {
    message: 'The value must consist of numbers only',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    try {
      numberStringSchema.parse(e.currentTarget.value);
      setCount(Number(e.currentTarget.value));
      dispatch(setCountCard({id, value: Number(e.currentTarget.value)}))
    } catch (error) {
      const customError = error as ZodError
      console.log(customError.issues[0].message)
    }
  }

  const incrementHandler = (id: number) => {
    setCount((count) => count + 1)
    dispatch(incrementCountCard({id, count}))
  }

  const decrementHandler = (id: number) => {
    if (count === 1) {
      return
    }
    setCount((count) => count - 1)
    dispatch(decrementCountCard({id, count}))
  }
  const addCardInShopCart = (data: CardType) => {
    setCount(1)
    dispatch(addCardInShop(data))
    dispatch(resetDefaultValueItem({id: data.id}))
    showModalHandler(true)
  }

  const resetDefaultValue = (id: number) => {
    setCount(1)
    dispatch(resetDefaultValueItem({id}))
  }
  console.log()

  return (<div className={s.good}>
      <img src={card.img} className={s.goodImg} alt="image-item"/>
      <NavLink to={`${card.id}`} className={s.titleGood}>{card.title}</NavLink>
      <div className={s.priceBlock}>
        <p className={s.price}>{card.price} </p>
        <p className={s.value}>{card.value}</p>
      </div>
      <div className={s.buttonsCount}>
        <button className={s.buttonCount}
                onClick={() => decrementHandler(card.id)}>-
        </button>
        <input type="text" value={count} className={s.count}
               onBlur={() => setCount(count === 0 ? 1 : count)}
               onChange={(e) => onChange(e, card.id)}/>
        <button className={s.buttonCount}
                onClick={() => incrementHandler(card.id)}>+
        </button>
      </div>
      <button type='reset' onClick={() => resetDefaultValue(card.id)}
              className={s.resetCount}>reset
      </button>
      <button className={s.buttonAddGood} onClick={() => addCardInShopCart(
        {
          id: card.id,
          img: card.img,
          price: card.price,
          title: card.title,
          count: Number(count),
          value: card.value
        })}>Add to cart
      </button>
    </div>
  );
})

