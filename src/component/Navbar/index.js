import React from "react";
import {Link} from 'react-router-dom'
import social from '../../json/social.json'
import './style.css'
import CreateList from "./CreateList";
const Navbar = ()=>{
    return <>
        <nav className="navbar wrapper flex">
            
            <ul className="navbar__nav social__nav flex">
                <CreateList reference = {social[0]}/>
            </ul>
            <ul className="navbar__nav page__nav" role="navigation">
                <Link className="nav__link" to='/'>
                    Home
                </Link>
                <Link className="nav__link" to='/projects/'>
                    Timeline
                </Link>
            </ul>
        </nav>
    </>
}


export default Navbar