import s from './preloader.module.scss'
import img from './loader.webp'

export const Preloader = () => {
  return <img className={s.preloader}  src={img} alt=""/>
};
