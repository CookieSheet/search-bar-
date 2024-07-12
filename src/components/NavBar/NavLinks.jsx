import './NavBar.css';

const NavLinks = ({isClicked, closeMenu}) =>{
    return(
        <nav className="NavLinks">
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/Buttons">Buttons</a>
            </li>
            <li>
                <a href="/GoogleMaps">Google Maps</a>
            </li>
            <li>
                <a href="/Random">Random</a>
            </li>
            <li>
                <a href="/Coffee">Coffee</a>
            </li>
        </ul>
        </nav>
    )

}

export default NavLinks;

