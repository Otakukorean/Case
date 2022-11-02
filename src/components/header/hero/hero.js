import React , {useEffect} from 'react'
import hero from './heroImg/Phone Mock.png';
import back from './heroImg/Shapes.png'
import "./styles/Hero.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Hero() {
  useEffect(() => {
    AOS.init(({duration : 1000}));
  },[])
  return (
    <div className='container' data-aos="fade-right">
        <div  className="hero-container">
            <div className="text-btn-container">
                <div className="text">
                    <h1><span>Design</span> <br /> cases <br /> for your <br /> gadgets</h1>
                </div>
                <div className="btn">
                    <button className="btn-hero">Download App</button>
                </div>
            </div>
            <div className="hero-img-container" style={{background:`url(${back})`}}>
                <img src={hero} alt="Phone Mock" />
            </div>
        </div>
    </div>
  )
}
