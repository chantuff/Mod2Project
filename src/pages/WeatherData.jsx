import React from 'react'

export default function WeatherData() {
  return (
    <>
    <div className='search-bar'>
      <input type='text' className='cityInput' placeholder='Enter city here....'></input>
      <div className='search-icon'>
        <img src= 'search.png' alt='' />
      </div>
    </div>
    
    </>
  )
}
