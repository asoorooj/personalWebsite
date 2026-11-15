import "./sectionContainer.css";
import {HoveredProvider, useHoveredContext} from "../../hooks/useHoveredContext.jsx";


const SectionContainerContext = function ({children, id, sectionHeader}){

    return(
        <HoveredProvider>
            <SectionContainer id={id} sectionHeader={sectionHeader}>
                {children}
            </SectionContainer>
        </HoveredProvider>
    );
};



const SectionContainer = function ({children, id, sectionHeader}){

    const [isHovered, onHover] = useHoveredContext();

    return(
        <div className="section-container scroll-mt-[90px]" onMouseEnter={onHover} onMouseLeave={onHover} id={id}>
            {sectionHeader && <span className={"sectionHeader"}>{sectionHeader}</span>}
            {children}
        </div>
    );
};

export {SectionContainerContext as default};