// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwsU5NbLkvPdMwpDaWveDHewOmdV-PHVc",
  authDomain: "todolist-2e82c.firebaseapp.com",
  projectId: "todolist-2e82c",
  storageBucket: "todolist-2e82c.appspot.com",
  messagingSenderId: "1043615811656",
  appId: "1:1043615811656:web:d64bf5a166e1802cdbb07d",
  measurementId: "G-QK3WXL06MS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };