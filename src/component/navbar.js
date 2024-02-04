import { useRef } from "react";
function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <div className="nav-container">
            <h1>Sameer <span>Lama</span>.</h1>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="#skillbox">Skill</a>
                <a href="#ProjectCard">Project</a>
                <a href="#contact">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <i className="fa-solid fa-x"/>
                </button>
            </nav>
            <div className="btn-resume">
            <a href="#/">RESUME</a>
            </div>
            <button className="nav-btn" onClick={showNavbar}>
            <i className="fa-solid fa-bars"/>
            </button>
            </div>
        </header>
    )
}
export default Navbar;