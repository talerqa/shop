import preloader from "../../assets/img/preloader.svg";
import s from "./preloader.module.scss";

export const Preloader = () => {
  return (
    <>
      <img src={preloader} className={s.preloader} alt="preloader"/>
    </>
  );
};
