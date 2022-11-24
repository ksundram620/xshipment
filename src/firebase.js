// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6KSjpOnfkD7441xKC-KdLbYy7Y4pGHYw",
  authDomain: "crud-operation-3f555.firebaseapp.com",
  projectId: "crud-operation-3f555",
  storageBucket: "crud-operation-3f555.appspot.com",
  messagingSenderId: "556989562211",
  appId: "1:556989562211:web:7d483a405d45d59db76756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authrization=getAuth(app);
const provider=new GoogleAuthProvider();
const database = getFirestore(app);


export {authrization,provider,database}