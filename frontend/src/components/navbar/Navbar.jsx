import "./navbar.css";


const Navbar = function() {

    function scrollToComponent(id) {
        const element = document.getElementById(id);

        console.log(element);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth", // Smooth transition
                block: "start"      // Align to the top of the viewport
            });
        }
    }


    return(
        <div className="navbar">
            <span>Icon</span>
            <div className="navbar-selections">
                <button onClick={()=>{scrollToComponent("workInProgressSection");}} className="navbar-selection cursor-pointer">About Me</button>
                <button onClick={()=>{scrollToComponent("workInProgressSection");}} className="navbar-selection cursor-pointer">Experience</button>
                <button onClick={()=>{scrollToComponent("workInProgressSection");}} className="navbar-selection cursor-pointer">Skills</button>
                <button onClick={()=>{scrollToComponent("workInProgressSection");}} className="navbar-selection cursor-pointer">Projects</button>
                <button onClick={()=>{scrollToComponent("workInProgressSection");}} className="navbar-selection cursor-pointer">Contact Me</button>
            </div>
        </div>
    );
};

export {Navbar as default};