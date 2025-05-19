// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJY0DFgXqDZsgEon2a22txCynvNIe7suc",
  authDomain: "ecommerce-gina.firebaseapp.com",
  projectId: "ecommerce-gina",
  storageBucket: "ecommerce-gina.appspot.com",
  messagingSenderId: "712631424892",
  appId: "1:712631424892:web:cee0b3a760a4b4d2e136f9",
  measurementId: "G-ZZQ3CP70KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);