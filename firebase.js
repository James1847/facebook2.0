// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ9eeiroUtSwhCJEjNQYCrUabAQ1Fyo0o",
  authDomain: "facebook2-7578a.firebaseapp.com",
  projectId: "facebook2-7578a",
  storageBucket: "facebook2-7578a.appspot.com",
  messagingSenderId: "941573204419",
  appId: "1:941573204419:web:53c0d4c88480f453e43576",
  measurementId: "G-D4Z4CLWHG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// const analytics = getAnalytics(app);
const db = app.firestore();
const storage = firebase.storage();

export { db, storage }