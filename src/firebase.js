import firebase from "firebase/app";




var firebaseConfig = {
    apiKey: process.env.REACT_APP_KEY,
    authDomain: process.env.REACT_APP_AUTH,
    databaseURL: process.env.REACT_APP_DB,
    projectId: process.env.REACT_APP_ID,
    storageBucket: process.env.REACT_APP_SB,
    messagingSenderId: process.env.REACT_APP_MSJ,
    appId: process.env.REACT_APP_APPID,
  };
 console.log('process?',process.env.REACT_APP_APPID)
  
  const fire =  firebase.initializeApp(firebaseConfig);
  
  export default fire ;   
 