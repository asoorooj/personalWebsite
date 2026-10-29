import "./sectionContainer.css";


const SectionContainer = function ({children, onHover, id, sectionHeader}){
    return(
        <div className="section-container scroll-mt-[90px]" onMouseEnter={onHover} onMouseLeave={onHover} id={id}>
            {/*<div className={"border-0 border-white flex flex-col w-full"}>*/}
            {sectionHeader && <span className={"sectionHeader"}>{sectionHeader}</span>}
            {children}
        </div>
    );
};

export {SectionContainer as default};