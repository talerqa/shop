import './App.css'
import {useAppDispatch, useAppSelector} from "./hooks.ts";
import {cardData, CardType} from "./itemSlice.ts";
import {shopCard} from "./shopCartSlice.ts";


function App() {
  const {incrementCountCard, decrementCountCard} = cardData
  const {addCardInShop} = shopCard
  const state = useAppSelector((state) => state.counterReducer)

  const stateShop = useAppSelector((state) => state.shopCardReducer)

  const dispatch = useAppDispatch()

  const incrementHandler = (id: number) => {
    dispatch(incrementCountCard({id}))
  }

  const decrementHandler = (id: number) => {
    dispatch(decrementCountCard({id}))
  }
  console.log(    stateShop  )
  const addCardInShopCart = (data: CardType) => {
    dispatch(addCardInShop(data))
  }

  return (<div>

      <div style={{display: 'flex'}}>{stateShop.map((item: CardType, index) => {
        return <div key={index}>
          <p>amount count : {item.count}</p>
          <p>{item.title}</p>
          <img src={item.img} alt=""/>
        </div>
      })}
      </div>


      <div style={{display: 'flex', flexWrap: "wrap"}}>
        {state.map((card, index) => {
          return <div key={index}>
            <img src={card.img} alt="image-item"/>
            <p>{card.price}</p>
            <span>{card.value}</span>
            <p>{card.title}</p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <button onClick={() => decrementHandler(card.id)}>-</button>
              <p>{card.count}</p>
              <button onClick={() => incrementHandler(card.id)}>+</button>
            </div>

            <button onClick={() => addCardInShopCart(
              {
                id: card.id,
                img: card.img,
                price: card.price,
                title: card.title,
                count: card.count,
                value: card.value
              })}>add to
              card
            </button>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
