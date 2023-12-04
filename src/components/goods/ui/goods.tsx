import {useAppDispatch, useAppSelector} from "@/hooks/rtkHooks";
import {Preloader} from "@/components/common/preloader";
import {Good} from "@/components/goods/good/ui";
import s from './goods.module.scss'
import {ChangeEvent} from "react";
import {getGoodByName, goodData} from "@/components/goods/good/model";

export const Goods = () => {

  const dispatch = useAppDispatch()
  const goodState = useAppSelector((state) => state.goodState.productType)
  const value = useAppSelector((state) => state.goodState.title)
  const status = useAppSelector(state => state.appReducer.status)
  const statusGoods = useAppSelector(state => state.goodState.status)

  const {setName} = goodData

  const changeValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setName({title: event.target.value}))
    dispatch(getGoodByName({title: event.target.value}))
  }

  return (
    <div className={s.goodsWrapper}>
      <div className={s.inputBlock}>
        <p className={s.titleInput}>Search product</p>
        <div className={s.inputFind}>
          <input type="search" className={s.input} value={value}
                 onChange={changeValueHandler}/>
          <button
            className={s.buttonClear}
            onClick={() => {
              dispatch(setName({title: ''}))
              dispatch(getGoodByName({title: ''}))
            }}>clear
          </button>
        </div>
      </div>

      <div className={s.goods}>

        {goodState.length > 0 ?
          status === 'pending' || statusGoods === 'loading' ?
            <div className={s.goodsPreloader}>
              < Preloader/>
            </div>
            : goodState.map((card, index) => {
              return <Good card={card} key={index}/>
            })
          : <div className={s.emptyGood}>Empty</div>
        }
      </div>
    </div>

  )
    ;
}

