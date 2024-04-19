import AboutImg from '../images/about.webp';
function About() {
    return(
        <div className="about">
            <div className="aboutContent">
            <div className="aboutImage">
                <img src={AboutImg} alt="" />
            </div>
            <div className="AboutMeText">
                <h2>About <span>Me</span></h2>
                <h5>Developer</h5>
                <p>Hello, I'm Samir Lama, a dedicated front-end developer driven by an authentic passion for transforming digital concepts into compelling user experiences. My toolkit comprises HTML, CSS, JavaScript and React which I expertly wield to craft seamless and visually captivating interfaces. What distinguishes me extends beyond technical proficiency; it's my unwavering commitment to collaboration. I firmly believe in the transformative power of teamwork and effective communication to breathe life into ideas. As I embark on the exhilarating journey of pursuing an internship, I bring with me an insatiable thirst for knowledge and a meticulous eye for detail.</p>
            </div>   
            </div>    
        </div>
    )
}
export default About;