import "./sectionContainer.css";


const SectionContainer = function ({children, onHover, id}){
    return(
        <div className="section-container scroll-mt-[90px]" onMouseEnter={onHover} onMouseLeave={onHover} id={id}>
            {children}
        </div>
    );
};

export {SectionContainer as default};