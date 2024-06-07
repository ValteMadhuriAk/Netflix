import React, { useEffect } from 'react'
import Header from './Header'
import SignIn from './SignIn'
import Browse from './Browse'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utills/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utills/userSlice'

const Body = () => {
  const dispatch = useDispatch();

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName }= user;
      dispatch(addUser({uid: uid, email: email, displayName: displayName}));
      // ...
    } else {
      dispatch(removeUser());
    }
  });
},[]);


const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <SignIn />
  },
  {
    path : '/browse',
    element : <Browse />
  },
  {
    path : '/header',
    element : <Header />
  }
]);

return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body