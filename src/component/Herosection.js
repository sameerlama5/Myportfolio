import Sameer from '../images/sameerlama55.png';
function Herosection () {
    return (
        <div className="hero">
            <div className="heroContent">
            <div className="text-content">
                <span>I'M,</span>
                <h1>Sameer Lama .</h1>
                <h4>FRONT-END DEVELOPER</h4>
                <button type="button" className="btn">Contact ME</button>
        </div>
            <div className="Myimage">
                <img src={Sameer}/>
            </div>
            </div>
        </div>
    )
}
export default Herosection;