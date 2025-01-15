import React, { useContext } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import 'firebase/auth';
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useLocation, useNavigate} from 'react-router-dom';


const Login = () => {
    const[loggedInUser,setLoggedInUser]= useContext(UserContext);
    const navigate=useNavigate();
    const location=useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    const login = () => {
        auth.signin(() => {
          // Redirect to the intended page after login
          navigate(from, { replace: true });
        });
      };

    firebase.initializeApp(firebaseConfig)
    const handleGoogleSignIn=()=>{
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const {displayName,email} = result.user;

    const signInUser={name:displayName,email}

    setLoggedInUser(signInUser);
    navigate.replace(from);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
      <h1>Login Page</h1>
      <button
        onClick={handleGoogleSignIn}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#FFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Sign In
      </button>
    </div>
    );
};

export default Login;