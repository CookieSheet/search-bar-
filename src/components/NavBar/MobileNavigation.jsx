import NavLinks from "./NavLinks";
import './NavBar.css';
import {MdOutlineMenu} from 'react-icons/md'
import { useState } from "react";
import {MdClose} from 'react-icons/md';


const MobileNavigation = () =>{
    const [click, setclick] = useState(false);

    const Hamburger = <MdOutlineMenu className="HamburgerMenu"
           size="30px" color="black"
           onClick={() => setclick(!click)} />

    const Close = <MdClose className="HamburgerMenu"
            size="30px" color="black"
           onClick={() => setclick(!click)} />
    
    const closeMenu = () => setclick(false);

    return(
        <nav className="MobileNavigation">
             <h2 className="logo">Logo</h2>
             { click ? Close : Hamburger}
             {click && <NavLinks isClicked={true} closeMenu={closeMenu}/>}
        </nav>
    )
}

export default MobileNavigation;