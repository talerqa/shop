import {useEffect} from "react";
import {matchRoutes, useLocation, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../../../hooks.ts";
import {infoGoodThunk} from "../model/infoGoodSlice.ts";

export const InfoGood = (): JSX.Element => {

  const dispatch = useAppDispatch()
  const {infoGoodSlice} = infoGoodThunk
  const navigate = useNavigate()
  useEffect(() => {
    if (!Number(a![0].params.id)) {
      debugger
      navigate('/goods')
    } else if (Number(a![0].params.id)) {
      dispatch(infoGoodSlice({id: a![0].params.id}))
    }
  }, [])
  const state = useAppSelector(state => state.infoGoodState)
  const routes = [{path: "/goods/:id"}]
  const location = useLocation();
  const a = matchRoutes(routes, location)

  return (<div>
      {state.map(item => {
        return <div>
          {item.price}
          {item.description}
          {item.title}
          {item.value}
          {item.count}
          <img src={item.img} alt=""/>
        </div>
      })}
    </div>
  );
}

