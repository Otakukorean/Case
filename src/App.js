import React , {useEffect} from 'react';
import './App.css';
import Navbar from './components/header/nav/Navbar.jsx';
import Hero from './components/header/hero/hero';
import About from './components/about/About';
import FeatureOne from './components/featuresOne/FeatureOne'
import FeatureTow from './components/featuresTow/FeatureTow'
import CaseCraft from './components/why_case_craft/CraftCase'
import Video from './components/vidCover/video.jsx'
import CTA from './components/CTA/Cta'
import Footer from './components/Footer/Footer'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'
 // You can also use <link> for styles
function App() {

 

  return (
    <div className="App">
      <Zoom>
      <Navbar />
      </Zoom>
      <Hero />
      <About/>
      <Zoom>
      <FeatureOne/>
      </Zoom>
      <Fade>
      <FeatureTow/>
      </Fade>
      <Fade>
      <CaseCraft/>
      </Fade>
      <Fade>
      <Video/>
      </Fade>
      <Zoom>
      <CTA/>
      </Zoom>
      <Footer/>
    </div>
  );
}

export default App;
