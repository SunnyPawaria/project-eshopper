import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";

export const getCartDatafirebase = async () => {
  const q = query(collection(db, "carts"));

  const querySnapshot = await getDocs(q);

  const data = [];

  querySnapshot.forEach((doc) => {
    const d = doc.data();
    d.id = doc.id;

    data.push(d);
  });

  return data;
};

export const addCartFirebase = async (data) => {
  console.log("fsafd");
  let collectionRef = collection(db, "carts");

  const docRef = await addDoc(collectionRef, data);

  data.id = docRef.id;

  return data;
};

export const updateCartFirebase = async (data) => {
  let refDoc = doc(db, "carts", data.id);

  await updateDoc(refDoc, data);

  console.log("sadfasf");
};

export const deleteCartFirebase = async (id) => {
  let refDoc = doc(db, "carts", id);

  await deleteDoc(refDoc);
};
