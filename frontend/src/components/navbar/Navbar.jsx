import "./navbar.css";
import {useScrollToComponent} from "../../hooks/useScrollToComponent.js";


const Navbar = function() {

    const scrollToComponent = useScrollToComponent();

    return(
        <div className="navbar">
            <span>Icon</span>
            <div className="navbar-selections">
                <button onClick={()=>{scrollToComponent("aboutMeSection");}} className="navbar-selection cursor-pointer">About Me</button>
                <button onClick={()=>{scrollToComponent("skillsSection");}} className="navbar-selection cursor-pointer">Skills</button>
                <button onClick={()=>{scrollToComponent("workInProgressSection");}} className="navbar-selection cursor-pointer">Experience</button>
                <button onClick={()=>{scrollToComponent("workInProgressSection");}} className="navbar-selection cursor-pointer">Projects</button>
                <button onClick={()=>{scrollToComponent("workInProgressSection");}} className="navbar-selection cursor-pointer">Contact Me</button>
            </div>
        </div>
    );
};

export {Navbar as default};