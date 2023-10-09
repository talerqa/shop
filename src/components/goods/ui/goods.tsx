import {Good} from "../good/ui/good.tsx";
import {useAppSelector} from "../../../hooks.ts";
import s from './goods.module.scss'
import {useEffect, useState} from "react";
import {Preloader} from "../../common/preloader.tsx";

export const Goods = () => {
    const state = useAppSelector((state) => state.goodState)
    const [showModal, setModal] = useState<boolean>(false)


    useEffect(() => {
      let timeoutID = setTimeout(() => {
        showModalHandler(false)
      }, 1500)
      return () => clearTimeout(timeoutID)
    }, [showModal])

    const showModalHandler = (showModal: boolean) => {
      setModal(showModal)
    }
  const status = useAppSelector(state => state.appReducer.status)

    return (<div className={s.goods}>
        {status === 'loading' && <div>< Preloader/></div>      }
        {state.map((card, index) => {
          return <Good card={card} key={index}
                       showModalHandler={showModalHandler}/>
        })}
        {showModal &&
            <div className={s.modalNotification}><span className={s.modalText}>Add to cart</span>
            </div>}
      </div>
    );
  }
;

