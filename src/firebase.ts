import {initializeApp,} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {getStorage, ref} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBImIGMi18um13lgqPTA3WdjiY333GZlHo",
  authDomain: "shop-test-57651.firebaseapp.com",
  projectId: "shop-test-57651",
  storageBucket: "shop-test-57651.appspot.com",
  messagingSenderId: "489719419996",
  appId: "1:489719419996:web:a2a0d73dcea688c3234299",
  measurementId: "G-4KFVLNF2KC"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const colRef = collection(db, 'shop')
let shop: any = []

export const stateItems = getDocs(colRef)
  .then((res) => {
    res.docs.forEach((doc) => {
      shop.push({...doc.data(), id: doc.id})
    })
    return shop[0].shopItems
  }).catch((err) => {
    return err.message
  })
console.log(stateItems.then((res) => res))
let stor = getStorage()
export const image = ref(stor, 'collection/item1.png.webp')

console.log(image)