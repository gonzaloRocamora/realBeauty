import { React , useState ,useEffect } from 'react'
import fire from './firebase'
import "firebase/auth";
import Home from './Home';



export default function Sign() {
    const [email, setEmail] = useState('');
    console.log(email)
    const [password, setPassword] = useState('');
    const [hasAccount, setHasAccount] = useState('')
    const [hasUser, setHasUser] = useState()




    const handleSignUp = (event) => {
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {

                var user = userCredential.user;
                
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

            });
    }


    const handleSignIn = (event) => {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {

                var user = userCredential.user;
               

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });

    }
    //obtener el usurio actual
    const authListener = () => fire.auth().onAuthStateChanged((user) => {
        if (user) {
         
          var uid = user.uid;
          setHasUser(uid)
          
        } else {
           setHasUser('')
        }
      });
   
      useEffect(() => {
         authListener();
          
      }, [])
    
      //Log out
      const logOut = (event) => {
           
        event.preventDefault()
        fire.auth().signOut()
    }
   
    return (



        <div>

            {!hasUser ? (

                <form>

                    <label htmlFor='email'></label>
                    <input id='email' type='email' onChange={function (data) { setEmail(data.target.value) }} required></input>

                    <label htmlFor='password'></label>
                    <input id='password' type='password' onChange={function (data) { setPassword(data.target.value) }} required></input>

                    {hasAccount ? (
                        <>
                            <button onClick={handleSignUp}>Sign up</button> <p>Already have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>

                    ) : (
                            <>

                                <button onClick={handleSignIn}>Sign In</button> <p>Don´t have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>

                            </>
                        )}
                </form>


            ) : (

                    <Home 
                    email={email}
                    logOut={logOut}/>
                    
                   
            ) }


        </div>

    )

}











