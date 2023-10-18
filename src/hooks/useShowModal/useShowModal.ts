import {useEffect, useState} from "react";

export const useShowModal = () => {
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

  return {showModal, showModalHandler}
}

