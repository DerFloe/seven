import React from 'react'
import Scrollspy from 'react-scrollspy'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Card from './components/Card.js'
import Projects from './components/Projects.js'

const App = () => {
  return (
    <div className="app">
      <section id="section-1"></section>
      <Scrollspy items={['section-2']} currentClassName="header-visible" >
        <li><Header /></li>
      </Scrollspy>
      <div className="flex-row">
        <div className="flex-small" />
        <div className="flex-small">
          <Card />
          <section id="section-2"><Projects /></section>
        </div>
        <div className="flex-small" />
      </div>
      <Footer />
    </div>
  )
}


export default App;
