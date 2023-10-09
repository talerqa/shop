import {Good} from "../good/ui/good.tsx";
import {useAppSelector} from "../../../hooks.ts";
import s from './goods.module.scss'
import {useEffect, useState} from "react";

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

    return (<div className={s.goods}>
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

