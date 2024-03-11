import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("");

    const navRef = useRef();

    useEffect(() => {
        const pathname = location.pathname;
        setActiveLink(pathname);
    }, [location.pathname]);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <div className="nav-container">
                <Link className="logoText" to="/">SG.</Link>
                <nav ref={navRef}>


                    <Link to="/" onClick={showNavbar} className={activeLink === "/" ? "active" : ""}>Home</Link>


                    <Link to="/skillpage" onClick={showNavbar} className={activeLink === "/skillpage" ? "active" : ""}>Skill</Link>


                    <Link to="/projectpage" onClick={showNavbar} className={activeLink === "/projectpage" ? "active" : ""}>Project</Link>


                    <Link to="/blogpage" onClick={showNavbar} className={activeLink === "/blogpage" ? "active" : ""}>Blog</Link>


                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <i className="fa-solid fa-x"/>
                    </button>
                </nav>

                <div className="btn-resume" id={activeLink === "/resumepage" ? "active" : ""}>
                    <Link to="/resumepage">RESUME</Link>
                </div>

                <button className="nav-btn" onClick={showNavbar}>
                    <i className="fa-solid fa-bars"/>
                </button>
                
            </div>
        </header>
    );
}

export default Navbar;
