// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1jReF4L7APV5q_1dM85PMnVSttszrOXk",
  authDomain: "my-project-7f997.firebaseapp.com",
  projectId: "my-project-7f997",
  storageBucket: "my-project-7f997.appspot.com",
  messagingSenderId: "649765766023",
  appId: "1:649765766023:web:7458cfaf9b426663430922",
  measurementId: "G-30FPP5EFT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);

export { app, db, storage };
