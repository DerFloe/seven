import React from 'react'
import Link from "react-scroll";

function Sidebar() {
    return (
        <div className="sidebar">
            <nav>
                <ul>
                    <li>
                        <Link
                            activeClass="active"
                            to="section-1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >START</Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="section-2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >TECHNOLOGIES</Link>
                    </li>
                    <li>
                        <a href="#0">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#0">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar