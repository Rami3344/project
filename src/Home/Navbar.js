import React from 'react'
import logo from '../logo.jpg'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="Nav-Bar">
            <div className="link">
            <img src={logo} alt=""></img>
            <ul>
                <li>
                    <Link className="home" to="/Body" >Home </Link>
                </li>
                <li><Link className="home" to="/Cours" >Cours </Link></li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar
