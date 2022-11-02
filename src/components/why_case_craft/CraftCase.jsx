import React from 'react'
import './styles/CraftCase.css';
import Aripods from './assets/Airpod.png';
export default function CraftCase() {
  return (
    <div className="container">
        <div className="Case-crft-Container">
        <div className="text_btn_container">
        <h1>Why CaseCraft?</h1>
        <p>Your gadgets weep all day as they crave <br /> for a makeover or anything at all to cover <br /> their tender & expensive parts, now you'll <br /> not just be doing your wallet a favor by <br /> protecting them you'll also get to make <br /> them look good and blend with style</p>
        <button className="btn-download">Download app</button>
        </div>
        <div className="imgae_daitls">
            <div className="airpods-container">
                <img  src={Aripods} alt="Airpods" />
            </div>
            <div className="pargrap-container">
                <p>Most sold of the month</p>
            </div>
        </div>
        </div>
        
        </div>
  )
}
