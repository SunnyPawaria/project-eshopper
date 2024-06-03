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

export const getProductDatafirebase = async () => {
  const q = query(collection(db, "products"));

  const querySnapshot = await getDocs(q);

  const data = [];

  querySnapshot.forEach((doc) => {
    const d = doc.data();
    d.id = doc.id;

    data.push(d);
  });

  return data;
};

export const addProductFirebase = async (data) => {
  let collectionRef = collection(db, "products");

  const docRef = await addDoc(collectionRef, data);

  console.log(docRef);
};

export const updateProductFirebase = async (data, id) => {
  let collectionRef = doc(db, "products", id);

  await updateDoc(collectionRef, data);
};
export const deleteProductFirebase = async ( id) => {
  let collectionRef = doc(db, "products", id);

  await deleteDoc(collectionRef);
};
