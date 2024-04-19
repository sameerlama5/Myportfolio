function Footer() {
  return (
    <div className="main">
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
        </div>
        <div className="zoom">
          <ul className="social_icon">
            <li>
              <a href="https://github.com/sameerlama5">
                <i className="fa-brands fa-square-github"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/profile.php?id=100052345146509">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/sameer_ghising55/">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skill</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <p>
          Hello it's me <a href="#">Sameer Tamang</a>
        </p>
      </footer>
    </div>
  );
}
export default Footer;
