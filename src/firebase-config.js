// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1mDoX7crHltgZ2pv4Lt6I1hEmfwz4qAE",
  authDomain: "project-eshopper.firebaseapp.com",
  projectId: "project-eshopper",
  storageBucket: "project-eshopper.appspot.com",
  messagingSenderId: "18021291669",
  appId: "1:18021291669:web:b9cfef7da6a313d309ed9c",
  measurementId: "G-88MR6CMH9L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);