import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase.configSetter";
import { products } from "components/tickets/products";

export const createUserCart = async (userId: string) => {
  const docRef = doc(db, "carts", userId);
  await setDoc(docRef, products);
  return;
};

export const getUserCartById = async (userId: string) => {
  var docRef = doc(db, "carts", userId);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      return docSnap.data();
    } else {
        console.log("no")
    }
  } catch (error) {
    console.log(error);
    return;
  }
};
