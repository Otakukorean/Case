import React from 'react'
import './styles/Footer.css'
import Logo from './assets/Logo.png'
import Twitter from './assets/Twitter.png'
import Instagram from './assets/Instagram.png'
import Dribble from './assets/Dribbble.png'
export default function Footer() {
  return (
    <div className='container'>
        <div className="item-container">
            <div className="firstItem">
                <div className="logo-txt">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="txt">
                        <h2>Casecraft</h2>
                    </div>
                </div>
                <div className="socialMedia">
                   <a href="https://twitter.com/"> <img src={Twitter} alt="Twitter" /></a>
                  <a href="https://www.instagram.com/">  <img src={Instagram} alt="Instagram" /></a>
                  <a href="https://dribbble.com/"> <img src={Dribble} alt="Dribble" /> </a> 
                </div>
            </div>
            <div className="list list-one">
                <h2>Casecraft</h2>
                <ul>
                    <li><a href="#">Updates</a></li>
                    <li><a href="#">Tutorials</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Enterprise</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="list list-Tow">
                <h2>Platform</h2>
                <ul>
                    <li><a href="#">Web (<span> join waitlist</span>)</a></li>
                    <li><a href="#">iOS</a></li>
                    <li><a href="#">Android</a></li>
                </ul>
            </div>
            <div className="list list-Therd">
                <h2>About</h2>
                <ul>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Security</a></li>
                </ul>
            </div>
        </div>


    </div>
  )
}
