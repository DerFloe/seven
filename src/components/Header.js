import React from 'react'
import Sidebar from './Sidebar'
import Fade from 'react-reveal/Fade';

function Header() {
    return (
        <header>
            <Fade top>
                <div className="headerbar">
                    <Fade top>
                        <h1>FLORIAN-HOFER.CO</h1>
                    </Fade>
                    <div className="flex-row">
                        <div className="flex-small text-right left-sidebar">
                            <Fade left>
                                <Sidebar />
                            </Fade>
                        </div>
                        <div className="flex-small" />
                        <div className="flex-small rightflex" />
                    </div>
                </div>
            </Fade>
        </header>
    )
}

export default Header