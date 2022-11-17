import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <nav>
            <h1>TechStar</h1>
            <main>
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>contact</Link>
                <Link to={"/#about"}>about</Link>
                <Link to={"/#brands"}>brands</Link>
                <Link to={"/services"}>services</Link>
                
            </main>
        </nav>
    )
}

export default Header