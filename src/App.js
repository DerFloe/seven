import React from 'react'
import Scrollspy from 'react-scrollspy'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Card from './components/Card.js'
import Projects from './components/Projects.js'

const App = () => {
  return(
    <div className="app">
      <Scrollspy items={['section-2']} currentClassName="visible" >
        <li><Header /></li>
      </Scrollspy>
      <div className="main">
        <div className="flex-row">
          <div className="flex-small"/>
          <div className="flex-small">
            <section id="section-1"><Card /></section>
            <section id="section-2"><Projects /></section>
          </div>
          <div className="flex-small"/>
        </div>
        <Footer />
      </div>
    </div>
  )
}


export default App;
