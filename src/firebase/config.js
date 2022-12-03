// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCShFM-mbgyRwe3QPF_dTuswKasjjQ3ggA",
  authDomain: "gotstorereact.firebaseapp.com",
  projectId: "gotstorereact",
  storageBucket: "gotstorereact.appspot.com",
  messagingSenderId: "482302396898",
  appId: "1:482302396898:web:1c32a37aea7acccd4e51bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);