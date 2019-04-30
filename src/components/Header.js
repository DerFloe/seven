import React from 'react'
import Sidebar from './Sidebar'

function Header() {
    return(
        <header>
        
            <div className="headerbar">
                <h1>SEVEN</h1>
                <div className="flex-row">
                    <div className="flex-small text-right left-sidebar">
                            <Sidebar />
                    </div>
                    <div className="flex-small"/>
                    <div className="flex-small"/>
                    
                </div>
            </div>
        </header>
    )
}

export default Header