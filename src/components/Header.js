import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utills/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utills/userSlice';
import { logo,profile_Image } from '../utills/constants';

const Header = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector((store)=>store.user);
const handleSIgnOut = ()=>{    
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    }); 
  }
 

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName }= user;
      dispatch(addUser({uid: uid, email: email, displayName: displayName}));
      navigate("/browse")
      // ...
    } else {
      dispatch(removeUser());
      navigate("/")
    }
  });
  
  //Unsubscribe when component unmounts
  return ()=>unsubscribe();
},[]);


  return (
    <div className='absolute w-screen py-8 px-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img alt='logo' className='w-44 h-16' src={logo} />
        
        <div className='flex p-2 py-2 px-4'>
        <img className="w-16 h-16 bg-no-repeat bg-right bg-contain float-right" src={profile_Image} alt='sign out button' />
        {user && <button onClick={handleSIgnOut} className='text-red m-23 font-bold'>Sign Out</button>
        }</div>
    </div>     
  );
}

export default Header