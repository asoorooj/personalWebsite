import "./navbar.css";
import {Link} from "react-router";


const Navbar = function() {
    return(
        <div className="navbar">
            <span>Icon</span>
            <div className="navbar-selections">
                <Link to={"/"} className="navbar-selection">About Me</Link>
                <Link to={"/"} className="navbar-selection">Experience</Link>
                <Link to={"/"} className="navbar-selection">Skills</Link>
                <Link to={"/"} className="navbar-selection">Projects</Link>
                <Link to={"/"} className="navbar-selection">Contact Me</Link>
            </div>
        </div>
    );
};

export {Navbar as default};