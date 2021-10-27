import { React, useState, useEffect } from "react";
import fire from "./firebase";
import "firebase/auth";
import Home from "./Home";
import "./logStyle.css";
import SignInForm from "./SignInForm";

export default function Sign() {
const [hasUser, setHasUser] = useState()


const authListener = () =>
fire.auth().onAuthStateChanged((user) => {
  if (user) {
 var uid = user.uid;
 setHasUser(uid)
    
  } else {
    setHasUser('')
  }
  console.log('user?', uid)
});

useEffect(() => {
authListener();
}, []);
  
  
  //Log out
  const logOut = (event) => {
    event.preventDefault();
    fire.auth().signOut();
  };

  return (
    <div>
      <h1 className="h1-welcome"></h1>

      {!hasUser ? (
        <SignInForm 

        />
      ) : (
        <Home logOut={logOut} />
      )}
    </div>
  );
}
