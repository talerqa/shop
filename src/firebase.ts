import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics"
import {collection, getDocs, getFirestore} from "firebase/firestore";


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
const analytics = getAnalytics(app);

const db = getFirestore()

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

