function Skill(props) {
    return(
        <div className="skillbox">
        <div className="skillProgressbar">
            <ul>
                <li>{props.title}</li>
                <li>{props.progress}</li>
            </ul>
        </div>
        <div className="firstline">
            <div className="secline">

            </div>
        </div>
        </div>
        
    )
}
export default Skill;