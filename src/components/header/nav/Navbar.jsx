import React, {useState} from 'react'
import './styles/Navbar.css'
import Logo from './logo/Group 12.svg';
import humburger from './logo/Hamburger.png'
import close from './logo/Hamb.png'
export default function Navbar() {
    const [open , setopen] = useState(true)


  return (
    <div >
        <header className={open ? "" : "Container-fluid"}>
            <div className="Container">
            <div className="logocontainer">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="logo_name">
                    <h2>Casecraft</h2>
                </div>
            </div>
            <div className={open ?"navbar" :"hamNva" }>
                <ul>
                    <li><a href="#">Tutorials</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">FAQs</a></li>
                    </ul>
            </div>
           <img onClick={() => setopen(!open)} src={open ?humburger : close } style={{cursor: 'pointer'}} alt="" />
           </div>
           {!open && <div className="navbar-fluid" style={{textAlign: 'center'}}>
            <ul>
                <li><a href=""> Tutorials</a></li>
                <li><a href="">Download</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">FAQs</a></li>
            </ul>
            
            </div>}
        </header>
        
    </div>
    
  )
}
