import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvas-naUIuweA0dFkDczaAyqEemR2N4Qw",
  authDomain: "pf-house-marketplace.firebaseapp.com",
  projectId: "pf-house-marketplace",
  storageBucket: "pf-house-marketplace.appspot.com",
  messagingSenderId: "689752002226",
  appId: "1:689752002226:web:ae10ab3ba32731f05dc3ab",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
