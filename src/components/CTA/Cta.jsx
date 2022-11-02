import React from 'react';
import './styles/Cta.css';
import Apple from './assets/logo.png';
import GooglePlay from './assets/logoGoogle.png';
import FinalImage from './assets/Mask.png';
export default function Cta() {
  return (
    <div className='container'>
        <div className="text-buttons">
            <div className="text-container">
                <h1>Get started now</h1>
            </div>
            <div className="button-container">
                <button>
                    <div className="btn-lol" style={{display: 'flex'}}>
                    <img src={Apple} alt="Apple" />
                    <div className="txt">
                    <p>Download on the</p>
                    <h2>App Store</h2>
                    </div>
                    </div>
                    </button>
                    
                <button>
                    <div className="btn-lol" style={{display: 'flex'}}>
                    <img src={GooglePlay} alt="Andriod" />
                    <div className="txt">
                    <p>Get it on</p>
                    <h2>Play Store</h2>
                    </div>
                    </div>
                    </button>

                   
  
        </div>
    </div>
    <div className="image-Container">
        <img src={FinalImage} alt="" />
    </div>
    </div>
  )
}
