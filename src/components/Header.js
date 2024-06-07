import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utills/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
const navigate = useNavigate();
const user = useSelector((store)=>store.user);
const handleSIgnOut = ()=>{    
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    }); 
  }

  return (
    <div className='absolute w-screen py-8 px-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img alt='logo' className='w-44 h-16' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
        
        <div className='flex p-2 py-2 px-4'>
        <img className="w-16 h-16 bg-no-repeat bg-right bg-contain float-right" src='https://occ-0-7161-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbhGN93G2BZ4g_AByDZF7bolh8pdku5CvUVU6sDmhupitew33q6fdaEJjKkbNEJFOqhim6nNb1MRWcZ_LPV9FPxAY5WLNgQ.png?r=a3f' alt='sign out button' />
        {user && <button onClick={handleSIgnOut} className='text-red m-23 font-bold'>Sign Out</button>
        }</div>
    </div>     
  );
}

export default Header