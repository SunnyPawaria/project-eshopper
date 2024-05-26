import {addDoc, collection, getDocs, query} from "firebase/firestore";
import {db} from "../../firebase-config";

export const getCategoryDatafirebase = async() => {

    const q = query(collection(db, "categories"));

    const querySnapshot = await getDocs(q);

    const data = [];

    querySnapshot.forEach((doc) => { 
        const d =  doc.data();
        d.id = doc.id;

        data.push(d);
    });

    return data;
}

export const addCategoryFirebase = async (data) => {
    let collectionRef = collection(db, "categories");
    const docRef = await addDoc(collectionRef, data);

    console.log(docRef);
}
