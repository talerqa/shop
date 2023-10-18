import {useEffect} from "react";
import {matchRoutes, useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@/hooks/rtkHooks";
import s from './infoGood.module.scss'
import {Preloader} from "@/components/common/preloader";
import {CardType} from "@/components/goods/good/model";
import {AddToCart} from "@/components/goods/good/ui/addToCart/ui";
import {
  infoGoodData,
  infoGoodThunk
} from "@/components/goods/good/ui/infoGood/model/infoGoodSlice.ts";

export const InfoGood = (): JSX.Element => {

  const dispatch = useAppDispatch()
  const {infoGoodSlice} = infoGoodThunk
  const {clearData} = infoGoodData
  const navigate = useNavigate()

  useEffect(() => {
    if (0 < Number(a![0].params.id) && Number(a![0].params.id) <= 10) {
      dispatch(infoGoodSlice({id: a![0].params.id}))
    } else if (!Number(a![0].params.id) || Number(a![0].params.id)) {
      navigate('/goods')
    }
    return () => {
      dispatch(clearData())
    }
  }, [])

  const good = useAppSelector(state => state.infoGoodState)
  const routes = [{path: "/goods/:id"}]
  const location = useLocation();
  const a = matchRoutes(routes, location)

  return (<div className={s.infoGoodBlock}>
      {good.status === 'pending' &&
          <div className={s.goodsPreloader}>
              < Preloader/>
          </div>}
      {good.infoGoods.map((item: CardType) => {
        return <div className={s.infoGood} key={item.id}>
          <img className={s.goodImg} src={item.img} alt="item-cart"/>
          <div className={s.information}>
            <p className={s.title}>{item.title}</p>
            <div className={s.priceBlock}>
              <p className={s.titlePrice}>Price:</p>
              <span className={s.price}>{item.price}</span>
              <span className={s.value}>{item.value}</span>
            </div>
            <p className={s.description}>{item.description}</p>
            <AddToCart card={item}/>
          </div>
        </div>
      })}
    </div>
  );
}

