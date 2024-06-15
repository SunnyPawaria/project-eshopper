import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase-config";

export const getOrderDatafirebase = async () => {

    const q = query(collection(db, "orders"));

    const querySnapshot = await getDocs(q);

    const data = [];

    querySnapshot.forEach((doc) => {
        const d = doc.data();
        d.id = doc.id;

        data.push(d);
    });

    return data;
}

export const placeOrderFirebase = async (data) => {
    let collectionRef = collection(db, "orders");

    await addDoc(collectionRef, data);
}
