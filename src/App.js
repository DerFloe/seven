import React from 'react'
import Scrollspy from 'react-scrollspy'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Card from './components/Card.js'
import Projects from './components/Projects.js'
import Fade from 'react-reveal/Fade'
const App = () => {

  return (
      <Scrollspy items={['section-2']} currentClassName="colorchange" >
      <div>
          <Scrollspy items={['section-2']} currentClassName="header-visible" >
            <li><Header /></li>
          </Scrollspy>
          <Fade>
          <div className="app">
            <div className="flex-row">
              <div className="flex-small leftflex" />
              <div className="flex-small">
                  <Card />
                 
                       <section id="section-2"><Projects /></section>
          
                      
             
              </div>
              <div className="flex-small rightflex" />
            </div>

          </div>
          </Fade>
          <Footer />
          
          

      </div>
    </Scrollspy>
  )
}



export default App;
