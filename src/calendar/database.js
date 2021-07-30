import firebase from "firebase";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBqQ5RM99j7lXQFE_N8Z5SVcZavuF_vVlE",
    authDomain: "log-in-real-beauty.firebaseapp.com",
    databaseURL: "https://log-in-real-beauty-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "log-in-real-beauty",
    storageBucket: "log-in-real-beauty.appspot.com",
    messagingSenderId: "801659278054",
    appId: "1:801659278054:web:a92cfc5ac592a8f204a127"
  };
  // Initialize Firebase
 const fb = firebase.initializeApp(firebaseConfig);

 export const db = fb.firestore()