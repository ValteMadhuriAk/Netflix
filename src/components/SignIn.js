import React from "react";
import Header from "./Header";
import { useState } from "react";

const SignIn = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

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
      <form className="absolute w-4/12 p-12 bg-black my-20 align-center mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? " Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            text="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          text="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <input
          text="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <button className="p-6 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? " Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleSignUp}>
          {isSignInForm
            ? "Already registered, sign in now"
            : "New to Netflix? Sign up now"}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
