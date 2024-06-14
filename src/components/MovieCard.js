import React from 'react'
import { img_CDN_URL } from '../utills/constants'

const MovieCard = ({postarPath}) => {
   
  return (
    <div className='w-48 pr-4'><img alt='Movie card' src={img_CDN_URL + postarPath} /></div>
  )
}

export default MovieCard