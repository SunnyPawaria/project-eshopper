import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const getUserDatafirebase = async () => {

    const q = query(collection(db, "users"));

    const querySnapshot = await getDocs(q);

    const data = [];

    querySnapshot.forEach((doc) => {
        const d = doc.data();
        d.id = doc.id;

        data.push(d);
    });

    return data;
}

export const addUserFirebase = async (data) => {
    let collectionRef = collection(db, "users");

    await addDoc(collectionRef, data);
}

export const updateUserFirebase = async (data,id) => {
    let collectionRef = doc(db, "users", id);

    await updateDoc(collectionRef, data);
}

export const deleteUserFirebase = async (id) => {
    console.log(id);
    let collectionRef = doc(db, "users", id);

    await deleteDoc(collectionRef);
}