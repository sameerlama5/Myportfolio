import { Link } from "react-router-dom";
import { useRef } from "react";
function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <div className="nav-container">
            <Link className="logoText" to="/">SG.</Link>
            <nav ref={navRef}>
                <Link to="/">home</Link>
                <Link to="skillpage">Skill</Link>
                <Link to="projectpage">Project</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <i className="fa-solid fa-x"/>
                </button>
            </nav>
            <div className="btn-resume">
            <a href="resumepage">RESUME</a>
            </div>
            <button className="nav-btn" onClick={showNavbar}>
            <i className="fa-solid fa-bars"/>
            </button>
            </div>
        </header>
    )
}
export default Navbar;