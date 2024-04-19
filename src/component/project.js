import React, {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
function Project(props) {
    useEffect(() => {
        AOS.init({duration: 2000});
    },[]);
    return(
        <div className="projectCard" id="ProjectCard" data-aos="zoom-out-down">
            <div className="projectlistImg">
                <img src={props.image} alt="project images."/>
            </div>
            <div className="projectText">
                <h4>{props.title}</h4>
                <a href="#/">View</a>
            </div>
        </div>
    )
}
export default Project;