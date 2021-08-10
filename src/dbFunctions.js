import fire from "./firebase";
import "firebase/auth";



  

  
  



//SIGN UP
export const handleSignUp = (email, password) => {

 
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};

//SIGN IN 
export const handleSignIn = (email, password) => {
 
 
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};



