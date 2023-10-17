import {useEffect} from "react";
import {matchRoutes, useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../../../hooks.ts";
import {infoGoodThunk} from "../model/infoGoodSlice.ts";
import {CardType} from "../../../model/goodSlice.ts";
import s from './infoGood.module.scss'
import {AddToCart} from "../../addToCart/ui/addToCart.tsx";

export const InfoGood = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const {infoGoodSlice} = infoGoodThunk
  const navigate = useNavigate()
  const allGoods = useAppSelector(state => state.goodState)

  useEffect(() => {
    if (!Number(a![0].params.id) || Number(a![0].params.id) > allGoods.length) {
      navigate('/goods')
    } else if (Number(a![0].params.id)) {
      dispatch(infoGoodSlice({id: a![0].params.id}))
    }
  }, [])

  const good = useAppSelector(state => state.infoGoodState)
  const routes = [{path: "/goods/:id"}]
  const location = useLocation();
  const a = matchRoutes(routes, location)

  return (<>
      {good.map((item: CardType) => {
        return <div className={s.infoGood} key={item.id}>
          <img className={s.goodImg} src={item.img} alt="item-cart"/>
          <div className={s.information}>
            <p className={s.title}>{item.title}</p>
            <div className={s.priceBlock}>
              <span className={s.price}>{item.price}</span>
              <span className={s.value}>{item.value}</span>
            </div>
            <p>{item.description}</p>
            <AddToCart card={item}/>
          </div>
        </div>
      })}
    </>
  );
}

