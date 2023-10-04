import {CardType} from "../../../Items/item/model/itemSlice.ts";
import {ItemInShopCart} from "../../itemInShopCart/ui/itemInShopCart.tsx";
import {useAppSelector} from "../../../../hooks.ts";

const ShopCart = () => {
  const stateShop = useAppSelector((state) => state.shopCardReducer)



  return (

    <div>{stateShop.map((item: CardType, index) => {
      return (<div key={index} style={{display: 'flex' , flexDirection: "column", justifyContent: 'flex-start'}}>
        <ItemInShopCart item={item}/>
      </div>)
    })}
    </div>

  );
};

export default ShopCart;