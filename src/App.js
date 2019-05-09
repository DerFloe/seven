import React from 'react'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Card from './components/Card.js'
import Projects from './components/Projects.js'
import Fade from 'react-reveal/Fade'
import Scrollspy from 'react-scrollspy'
import ScrollingColorBackground from 'react-scrolling-color-background'

const App = () => {

  return (
    <div>
      <ScrollingColorBackground elector='.js-color-stop[data-background-color]' colorDataAttribute='data-background-color' initialRgb='rgb(0, 0, 0)' />
      <Scrollspy items={['section-2']} componentTag="div" currentClassName="header-visible" >
        <div><Header /></div>
      </Scrollspy>
      <Fade>
        <div className="app">
          <div className="flex-row">
            <div className="flex-small leftflex" />
            <div className="flex-small">
              <section data-background-color='rgb(0, 0, 0)' className='js-color-stop'>
                <Card />
              </section>
              <section data-background-color='rgb(255, 255, 255)' className='js-color-stop' id="section-2">
                <Projects />
              </section>
            </div>
            <div className="flex-small rightflex" />
          </div>

        </div>
      </Fade>
      <Footer />



    </div>
  )
}

export default App;