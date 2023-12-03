// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Constants from 'expo-constants';
import 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAwPoKeWTFJjbQHYj8yQK7mxxaf7PTGh0",
  authDomain: "sipngoauth.firebaseapp.com",
  projectId: "sipngoauth",
  storageBucket: "sipngoauth.appspot.com",
  messagingSenderId: "418587868994",
  appId:"1:418587868994:web:a7ae8237e4f70bdd7752d"
};
console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);

export default app;

