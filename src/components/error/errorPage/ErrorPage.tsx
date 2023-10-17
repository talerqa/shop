import error400 from "./400.svg";
import s from "./errorPage.module.scss";

export const ErrorPage = () => {
  return (
    <div className={s.errorBlock}>
      <img className={s.errorImage} src={error400} alt="" />
    </div>
  );
};
