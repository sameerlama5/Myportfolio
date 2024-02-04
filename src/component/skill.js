import { motion } from 'framer-motion';
import React from "react";
function Skill(props) {
    return(
        <div className="skillbox" id="skillbox">
        <div className="skillProgressbar">
            <ul>
                <li>{props.title}</li>
                <li>{props.progress}</li>
            </ul>
        </div>
        <div className="firstline">
            <motion.div className="secline"
            animate={{
                width: "90%"
            }}
            transition={{
                duration: 5
            }}
            />
        </div>
        </div>
        
    )
}
export default Skill;