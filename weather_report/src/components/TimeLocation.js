import React from 'react'
import { formatLocalTime } from '../services/WeatherService'

const TimeLocation = ({weather:{dt,timezone,name,country}}) => {
  return (
    <>
    <div className='flex items-center justify-center my-3 '>
      <p className='text-white '>
      {formatLocalTime(parseInt(dt))}
      </p>
    </div>
    <div className='flex items-center justify-center my-3 '>
        <p className='text-white text-2xl'>
            {`${name}, ${country}`}
        </p>
    </div>
    </>
  )
}

export default TimeLocation
