// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQyEEU6XQPfp_i9_EN3GC6WH2r3SwkdiI",
  authDomain: "clone-37e90.firebaseapp.com",
  projectId: "clone-37e90",
  storageBucket: "clone-37e90.appspot.com",
  messagingSenderId: "753732313010",
  appId: "1:753732313010:web:52d7d06dfc7a795f188eab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db= getFirestore(app)