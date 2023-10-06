import {Good} from "../good/ui/good.tsx";
import {useAppSelector} from "../../../hooks.ts";
import s from './goods.module.scss'

export const Goods = () => {
  const state = useAppSelector((state) => state.goodState)

  return (<div className={s.goods}>
      {state.map((card, index) => {
        return <Good card={card} key={index}/>
      })}
    </div>
  );
};

