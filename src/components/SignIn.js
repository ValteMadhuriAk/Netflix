import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../utills/validate";
import { auth } from "../utills/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage,setErrorMeassage] = useState(null);

  const navigate = useNavigate();

  const email = useRef(null); //to check what data is there in input boxes
  const password = useRef(null);//to check what data is there in input boxes
    // const fullName = useRef(null);//to check what data is there in input boxes

    //Validate Sign in form
  const validateSignIn = ()=>{
      const message = checkValidData(email.current.value,password.current.value);
      setErrorMeassage(message);

      if(message) return;
      if(!isSignInForm){
       createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMeassage(errorCode+ "-" +errorMessage);
       // ..
     });
     }

     else{
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMeassage(errorCode+"-"+errorMessage);
    });
    }
    };
    
    //Handle sign in
    const handleSignUp = () => {
      setisSignInForm(!isSignInForm); //toggle feature
    };
    return (
    <div>
      <Header />
      <div className="absolute w-full ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background image"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-20 align-center mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? " Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            text="text"
            placeholder="fullName"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <p className="text-lg font-bold-red text-red-700 py-4">{errorMessage}</p>
        <button className="p-6 my-4 bg-red-700 w-full rounded-lg" onClick={validateSignIn}>
          {isSignInForm ? " Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleSignUp}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered, sign in now"}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
