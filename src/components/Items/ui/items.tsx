import {Item} from "../item/ui/item.tsx";
import {useAppSelector} from "../../../hooks.ts";

const Items = () => {
  const state = useAppSelector((state) => state.itemReducer)

  return (
    <div style={{display: 'flex', flexWrap: "wrap"}}>
      {state.map((card, index) => {
        return <Item card={card} key={index}/>
      })}
    </div>
  );
};

export default Items;