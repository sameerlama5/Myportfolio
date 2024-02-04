function Project(props) {
    return(
        <div className="projectCard" id="ProjectCard">
            <div className="projectlistImg">
                <img src={props.image}/>
            </div>
            <div className="projectText">
                <h4>{props.title}</h4>
                <a href="#/">View</a>
            </div>
        </div>
    )
}
export default Project;