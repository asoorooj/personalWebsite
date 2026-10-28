import SectionContainer from "../SectionContainer.jsx";
import {useHover} from "../../../hooks/useHover.js";

const Skills = function() {

    const [isHovered, onHover] = useHover();

    return(
        <SectionContainer onHover={onHover} id={"skillsSection"}>
            <span className={"sectionHeader"}>Skills</span>
        </SectionContainer>
    );

};

export {Skills as default};