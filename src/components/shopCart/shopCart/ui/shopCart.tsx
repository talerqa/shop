import {CardType} from "../../../goods/good/model/goodSlice.ts";

import {useAppDispatch, useAppSelector} from "../../../../hooks.ts";
import {
  goodsInShopCart
} from "../../goodInShopCart/model/goodnShopCartSlice.ts";
import {GoodInShopCart} from "../../goodInShopCart/ui/goodInShopCart.tsx";


const ShopCart = () => {
  const stateShop = useAppSelector((state) => state.shopCartReducer)

  const {setTotalCost} = goodsInShopCart

  const totalCost = useAppSelector((state) => state.goodsInShopCartState.totalCost)

  const dispatch = useAppDispatch()
  let totalItemsCost = stateShop.reduce((a: any, b: any, index) => {
    if (index === 0) {
      return parseFloat((b.count * b.price).toFixed(2))
    } else {
      return Number(a) + parseFloat((b.count * b.price).toFixed(2));
    }
  }, 0)
  let totalItemsCostParse = parseFloat((totalItemsCost / 1).toFixed(2));
  console.log(totalItemsCostParse)
  dispatch(setTotalCost({totalCost: totalItemsCostParse}))

  return (<>
      <p>TOTAL COST: {totalCost}</p>
      <div>{stateShop.map((item: CardType, index) => {
        return (<div key={index} style={{
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'flex-start'
        }}>
          <GoodInShopCart item={item}/>
        </div>)
      })}
      </div>
    </>
  );
};

export default ShopCart;