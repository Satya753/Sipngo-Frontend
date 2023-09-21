import React from 'react';
import {getAuth , onAuthStateChanged , User} from 'firebase/auth';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDAwPoKeWTFJjbQHYj8yQK7mxxaf7PTGh0",
    authDomain: "sipngoauth.firebaseapp.com",
    projectId: "sipngoauth",
    storageBucket: "sipngoauth.appspot.com",
    messagingSenderId: "418587868994",
    appId:"1:418587868994:web:a7ae8237e4f70bdd7752d"
  };

initializeApp(firebaseConfig);
  
const auth = getAuth();
export default function userAuthentication(){

    const [user , setUser] = React.useState("");

    React.useEffect( ()=>{
        onAuthStateChanged(auth , (user)=>{
            if (user){
                setUser(user);
            }
            else{
                setUser("");
            }
        })
        
    }, []);

    return {user};
}