import { React, useState, useEffect } from "react";
import fire from "./firebase";
import "firebase/auth";
import Home from "./Home";
import "./styles.css";

export default function Sign() {
  const [email, setEmail] = useState();
  console.log(email);
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState()
  const [hasAccount, setHasAccount] = useState(false);
  const [hasUser, setHasUser] = useState();

  const handleSignUp = (event) => {
    event.preventDefault();
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

  const handleSignIn = (event) => {
    event.preventDefault();
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
  //obtener el usurio actual
  const authListener = () =>
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        setHasUser(uid);
      } else {
        setHasUser("");
      }
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
     <h1 className='h1-welcome'>Welcome to Real Beauty</h1>
     
      {!hasUser ? (
        <form id='form-sign'>
          {!hasAccount ? (
            <>
              <label htmlFor="email">Escribe tu email</label>
              <input
                id="email"
                type="email"
                onChange={function (data) {
                  setEmail(data.target.value);
                }}
                required
              ></input>
              <label htmlFor="password">Escribe tu contraseña</label>
              <input
                id="password"
                type="password"
                onChange={function (data) {
                  setPassword(data.target.value);
                }}
                required
              ></input>
              <button onClick={handleSignIn}>Incia Sesion</button>{" "}
              <p>
                No tienes una cuenta?
                <span onClick={() => setHasAccount(!hasAccount)}>Registrate</span>
              </p>
            </>
          ) : (
            <>
              <label htmlFor="email">Escribe tu email</label>
              <input
                id="email"
                type="email"
                onChange={function (data) {
                  setEmail(data.target.value);
                }}
                required
              ></input>
              <label htmlFor="password">Escribe tu contraseña</label>
              <input
                id="password"
                type="password"
                onChange={function (data) {
                  setPassword(data.target.value);
                }}required ></input>
              
                <label htmlFor='confirm-pass'>Repite tu contraseña</label>
                    <input id='confirm-pass' type='password' onChange={(e) => setConfirmPass(e.target.value)} required></input>   

              <button onClick={() =>password == confirmPass ? handleSignUp : alert('Las contraseñas deben ser iguales')}>Registrate</button>{" "}
              <p>
                Ya tienes una cuenta?
                <span onClick={() => setHasAccount(!hasAccount)}>Inicia sesión</span>
              </p>
            </>
          )}
        </form>
      ) : (
        <Home email={email} logOut={logOut} />
      )}
    </div>
  );
}
