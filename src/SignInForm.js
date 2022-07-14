import { React, useState } from "react";
import { handleSignUp, handleSignIn } from "./dbFunctions";
import "./logStyle.css";


export default function SignInForm() {
  const [hasAccount, setHasAccount] = useState(true);
  const [confirmPass, setConfirmPass] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  
  return (
    <div className="divForm">
      <div className="divSign">
        <h1>Welcome To Marampo</h1>
        <form>
          <label htmlFor="email"></label>
          <input
            placeholder="Mail"
            id="email"
            type="email"
            onChange={function (data) {
              setEmail(data.target.value);
            }}
            required
          ></input>
          <label htmlFor="password"></label>
          <input
            placeholder="Password"
            id="password"
            type="password"
            onChange={function (data) {
              setPassword(data.target.value);
            }}
            required
          ></input>
          {hasAccount ? (
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSignIn(email, password);
                }}
              >
                Incia Sesion
              </button>{" "}
              <p>
                No tienes una cuenta?
                <span onClick={() => setHasAccount(!hasAccount)}>
                  <strong>Registrate</strong>
                </span>
              </p>
            </div>
          ) : (
            <div id="repite-pass">
              <label htmlFor="confirm-pass">Repite tu contraseña</label>
              <input
                id="confirm-pass"
                type="password"
                onChange={(e) => setConfirmPass(e.target.value)}
                required
              ></input>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  password == confirmPass
                    ? handleSignUp(e, email, password)
                    : alert("Las contraseñas deben ser iguales");
                }}
              >
                Registrate
              </button>{" "}
              <p className="pCuenta">
                Ya tienes una cuenta?
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Inicia sesión
                </span>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
