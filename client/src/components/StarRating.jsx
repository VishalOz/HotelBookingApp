import React from 'react'
import { assets } from '../assets/assets'


const StarRating = ({rating = 4}) => {
  return (
    <div>
      {Array(5).fill('').map((_, index) => {
        <img src={rating > index ? assets.starIconFilled : assets.starIconOutLined} alt="startIcon" 
        className="w-4.5 h-4.5" />
      })}
    </div>
  )
}

export default StarRating
