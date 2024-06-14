import React from 'react'
import { useSelector } from 'react-redux';

const VideoTitle = ({title,overview}) => {


  return (
    <div className='w-screen aspect-video pt-[12%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-2/4'>{overview}</p>
      <div>
        <button className='text-black p-4 px-12 bg-white text-xl rounded-md hover:bg-opacity-20'>Play</button>
        <button className='mx-2 text-black py-4 px-12 bg-white text-xl rounded-md hover:bg-opacity-20'>More info</button>
      </div>

    </div>
  )
}

export default VideoTitle;