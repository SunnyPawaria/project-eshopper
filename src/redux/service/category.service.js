import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase-config";

export const getCategoryDataFirebase = async () => {

    const q = query(collection(db, "categories"));

    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        const d = doc.data();
        d.id = doc.id;
        data.push(d);
    });
    console.log(data);
}

export const addCategoryFirebase = async (data) => {
    // Add a new document with a generated id.
    let collectionRef = collection(db, "categories");
    const docRef = await addDoc(collectionRef, data);
    console.log("Document written with ID: ", docRef.id);
}