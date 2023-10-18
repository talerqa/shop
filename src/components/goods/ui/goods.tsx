import {Good} from "../good/ui/good.tsx";
import {useShowModal} from "@/hooks/useShowModal";
import {useAppSelector} from "@/hooks/rtkHooks";
import {Preloader} from "@/components/common/preloader";
import s from './goods.module.scss'

export const Goods = () => {
    const state = useAppSelector((state) => state.goodState)

    const {showModal, showModalHandler} = useShowModal()

    const status = useAppSelector(state => state.appReducer.status)

    return (<div className={s.goods}>
        {status === 'pending' &&
            <div className={s.goodsPreloader}>< Preloader/></div>}
        {state.map((card, index) => {
          return <Good card={card} key={index}
                       showModalHandler={showModalHandler}/>
        })}
        {showModal && <div className={s.modalNotification}>
            <span className={s.modalText}>Add to cart</span>
        </div>}
      </div>
    );
  }
;


