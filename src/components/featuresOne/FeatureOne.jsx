import React from 'react'
import './styles/FeatureOne.css'
import FeatureOneImage from './assets/Airbods.png';
export default function FeatureOne() {
  return (
    <div className="container">
    <div className='Container-feature'>
        <div className="headdr-text">
            <h2>A tool that makes you</h2>
            <h1>A Superhero</h1>
            <p>Stand upright, wear your cape and put on some tight <br /> superman pants.</p>
        </div>
        <div className="image-container">
            <img src={FeatureOneImage} alt="" />
        </div>
        
        </div>
        </div>
  )
}
