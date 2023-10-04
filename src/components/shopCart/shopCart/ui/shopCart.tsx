import {CardType} from "../../../Items/item/model/itemSlice.ts";
import {ItemInShopCart} from "../../itemInShopCart/ui/itemInShopCart.tsx";
import {useAppSelector} from "../../../../hooks.ts";

const ShopCart = () => {
  const stateShop = useAppSelector((state) => state.shopCardReducer)
  return (
    <div style={{display: 'flex'}}>{stateShop.map((item: CardType, index) => {
      return (<div key={index}>
        <ItemInShopCart item={item}/>
      </div>)
    })}
    </div>

  );
};

export default ShopCart;