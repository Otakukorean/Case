import React from 'react'
import './styles/Vid.css'
import VidCover from './assets/Vid Cover.png'
export default function video() {
  return (
    <div className="container">
      <div className='cover'>
       <img src={VidCover} width="100%" height="auto"alt="Video Cover" />
       </div>
    </div>
  )
}
