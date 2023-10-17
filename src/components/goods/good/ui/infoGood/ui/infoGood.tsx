import {useEffect} from "react";
import {matchRoutes, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../../../hooks.ts";
import {infoGoodThunk} from "../model/infoGoodSlice.ts";

export const InfoGood = () => {
  const dispatch = useAppDispatch()
  const {infoGoodSlice} = infoGoodThunk

  useEffect(() => {
    dispatch(infoGoodSlice({id: a![0].params.id}))
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

