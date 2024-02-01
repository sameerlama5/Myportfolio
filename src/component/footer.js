
function Footer() {
    return(
        <div className="footerContainer">
            <div className="footerContent">
                <div className="myname">
                    <h1>Sameer <span>Lama.</span></h1>
                </div>
                <div className="contentlistme">
                    <ul>
                        <li>
                            <a href="#/">Home</a>
                        </li>
                        <li>
                            <a href="#/">Skill</a>
                        </li>
                        <li>
                            <a href="#/">Project</a>
                        </li>
                        <li>
                            <a href="#/">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="socialMedia">
                <a href="https://www.facebook.com/profile.php?id=100052345146509"><i class="fa-brands fa-facebook"></i></a>
                <a href="#/"><i class="fa-brands fa-instagram"></i></a>
                <a href="#/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
                <div className="me">
                    <p>hello its me <a href="#/">Sameer lama.</a></p>
                </div>
        </div>
    )
}
export default Footer;