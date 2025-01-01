import React from 'react'
import { Star } from 'lucide-react'
import { useState } from 'react'

export default function StartRating() {
  const limit = 5

  const [rating, setRating] = useState(0)
  const handleClick = (index: number) => {
    console.log(index)
    setRating(index + 1)
  }

  return (
    <div>
      <div className='flex cols'>
        {
          [...Array(limit)].map((_, index) => {
            return (
              <Star
                key={index}
                //  className={index < rating ? 'text-yellow-300' : 'bg-red-300'}
                color={index < rating ? 'yellow' : 'grey'}
                onClick={() => handleClick(index)}
                onMouseOver={() => setRating(index + 1)}
                onMouseLeave={() => setRating(0)}
              />
            )
          }
          )
        }

        {/* rating: {rating} */}
        {rating === 0 ? 'No rating' : `Rating: ${rating}`}
        <br />
        <br />
        <br />
        <br />

      </div>

      {/* hex for star search in google */}
      <hr />
      <div className='flex cols'>
        {
          [...Array(limit)].map((_, index) => {
            return (
              <span style={{ height: '2rem', width: '2rem', color: index < rating ? 'yellow' : 'grey' }}
                onClick={() => handleClick(index)}
                onMouseOver={() => setRating(index + 1)}
                onMouseLeave={() => setRating(0)}
                className='h-10 w-10'>&#9733;</span>
            )
          }
          )
        }
      </div>
      counting: {rating}
    </div>
  )
}
