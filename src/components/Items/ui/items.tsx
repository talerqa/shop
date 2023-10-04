import {Item} from "../item/ui/item.tsx";
import {useAppSelector} from "../../../hooks.ts";

const Items = () => {
  const state = useAppSelector((state) => state.counterReducer)

  return (
    <div style={{display: 'flex', flexWrap: "wrap"}}>
      {state.map((card, index) => {
        return <div key={index}>
          <Item card={card}/>
        </div>
      })}
    </div>
  );
};

export default Items;