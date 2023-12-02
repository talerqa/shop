import {shopCart} from "@/components/shopCart/shopCart/model";
import {useAppDispatch} from "@/hooks/rtkHooks";
import {ChangeEvent, memo, useCallback, useState} from "react";
import {z, ZodError} from "zod";
import s from "./addToCart.module.scss";
import {goodData} from "@/components/goods/good/model";
import {useShowModal} from "@/hooks/useShowModal";
import {appAction} from "@/components/app/model/appSlice.ts";
import {ProductType} from "@/components/goods/good/api/api.ts";


type Props = {
  card: ProductType
}
export const AddToCart = memo((props: Props) => {
  const {
    incrementCountCard,
    decrementCountCard,
    resetDefaultValueItem,
    setCountCard
  } = goodData
  const {addCardInShop} = shopCart
  const dispatch = useAppDispatch()
  const {card} = props
  const {setError} = appAction
  const {showModal, showModalHandler} = useShowModal()
  const [count, setCount] = useState<number>(card.count)

  if (count > 99) {
    setCount(99)
  }

  const numberStringSchema = z.string().refine((value) => /^[0-9]*$/.test(value), {
    message: 'The value must consist of numbers only',
  });

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>, id: number) => {
    try {
      numberStringSchema.parse(e.currentTarget.value);
      setCount(Number(e.currentTarget.value));
      dispatch(setCountCard({id, value: Number(e.currentTarget.value)}))
    } catch (error) {
      const customError = error as ZodError
      dispatch(setError({error: customError.issues[0].message}))
    }
  }, [count])

  const incrementHandler = useCallback((id: number) => {
    setCount((count) => count + 1)
    dispatch(incrementCountCard({id, count}))
  }, [count])

  const decrementHandler = useCallback((id: number) => {
    if (count === 1) {
      return
    }
    setCount((count) => count - 1)
    dispatch(decrementCountCard({id, count}))
  }, [count])

  const addCardInShopCart = (data: ProductType) => {
    setCount(1)
    dispatch(addCardInShop(data))
    dispatch(resetDefaultValueItem({id: data.id}))
    showModalHandler(true)
  }

  const resetDefaultValue = useCallback((id: number) => {
    setCount(1)
    dispatch(resetDefaultValueItem({id}))
  }, [count])

  return (<>
    <div className={s.buttonsCount}>
      {showModal && <div className={s.modalNotification}>
          <span className={s.modalText}>Add to cart</span>
      </div>}
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
        description: card.description,
        count: Number(count),
        value: card.value,
      })}>Add to cart
    </button>
  </>)
})