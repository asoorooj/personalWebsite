import "./sectionContainer.css";


const SectionContainer = function ({children, onHover}){
    return(
        <div className="section-container" onMouseEnter={onHover} onMouseLeave={onHover}>
            {children}
        </div>
    );
};

export {SectionContainer as default};