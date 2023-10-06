import {CardType} from "../../../Items/item/model/itemSlice.ts";
import {ItemInShopCart} from "../../itemInShopCart/ui/itemInShopCart.tsx";
import {useAppSelector} from "../../../../hooks.ts";

const ShopCart = () => {
  const stateShop = useAppSelector((state) => state.shopCardReducer)

  let totalItemsCost = stateShop.reduce((a: any, b: any, index) => {
    if (index === 0) {
      return parseFloat((b.count * b.price).toFixed(2))
    } else {
      console.log(a, b)
      return Number(a) + parseFloat((b.count * b.price).toFixed(2));
    }
  }, 0)
  let totalItemsCostParse = parseFloat((totalItemsCost / 1).toFixed(2));

  return (<>
      <p>TOTAL COST: {totalItemsCostParse}</p>
      <div>{stateShop.map((item: CardType, index) => {

        return (<div key={index} style={{
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'flex-start'
        }}>
          <ItemInShopCart item={item}/>
        </div>)
      })}
      </div>
    </>
  );
};

export default ShopCart;