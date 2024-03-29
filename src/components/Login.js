import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'
import { updateProfile } from "firebase/auth";


const Login = () => {

  const navigate=useNavigate();

    const [isSignInForm,setSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);

    const email=useRef(null);
    const password=useRef(null);

    const handleButtonClick=()=>{
      //Validate the form data
      //checkValidData(email,password)
      const message=checkValidData(email.current.value,password.current.value); 
      setErrorMessage(message);
      
      if(message) return;

      if(!isSignInForm){
        //Sign up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      
    }).then(() => {
      
    }).catch((error) => {
      setErrorMessage(error);
    });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
    // ..
  });
      }
      else{
        //Sign in logic
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
      }
    }

    const toggleSignInForm=()=>{
        setSignInForm(!isSignInForm);
    }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg '/>
      </div>
      <form onSubmit={(e)=>{e.preventDefault()}} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'/>}
        <input ref={email} type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700'/>
        <input ref={password} type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700'/>
        <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
        <button  className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already registered? Sign In Now..."}</p>
      </form>
    </div>
  )
}

export default Login
