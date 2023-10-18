import {useAppSelector} from "@/hooks/rtkHooks";
import {Preloader} from "@/components/common/preloader";
import {Good} from "@/components/goods/good/ui";
import s from './goods.module.scss'

export const Goods = () => {

  const goodState = useAppSelector((state) => state.goodState)
  const status = useAppSelector(state => state.appReducer.status)

  return (<div className={s.goods}>
      {status === 'pending' && <div className={s.goodsPreloader}>
          < Preloader/>
      </div>}
      {goodState.map((card, index) => {
        return <Good card={card} key={index}/>
      })}
    </div>
  );
}

