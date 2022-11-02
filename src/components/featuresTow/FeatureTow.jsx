import React from 'react'
import './styles/FeatureTow.css'
import FeatureTowImage from './assets/Screensbug.png';
export default function FeatureOne() {
  return (
    <div className="container">
    <div className='Container-featureTow'>
        <div className="headdr-text-Tow">
            <h2>Get full access to</h2>
            <h1>Photos & Patterns</h1>
            <p>Explore photos, patterns, colors & gradients designed by the <br /> best designers or simply use yours</p>
        </div>
        <div className="image-container-Tow">
            <img src={FeatureTowImage} alt="" />
        </div>
        
        </div>
        </div>
  )
}
