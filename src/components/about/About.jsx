import React, {useEffect} from 'react'
import './styles/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import shabes from './shabes/Shapes.png'
import mainImg from './shabes/Mask.png'
import Fade from 'react-reveal/Swing';
export default function About() {




  return (
    <Fade>
    <div >
     
        <div className="container" style={{background:`url(${shabes}) center`}} >
            <div className="text">
                <h1 >We're CaseCraft</h1>
                <p>We bring your imaginations to life by giving you the power & ability to create <br /> amazing, outstanding, breathtaking & spectacular cases for your gadgets. </p>
            </div>
            <div className="btn-container">
                <button><FontAwesomeIcon icon={faPlay} style={{width:"1.0625rem", height:"0.9375rem"}}/> How it works</button>
            </div>
            <div className="image-container">
              <img src={mainImg} alt="" className='img' />
            </div>
        </div>
    </div>
    </Fade>
  )
}
