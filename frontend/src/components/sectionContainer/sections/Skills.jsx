import SectionContainer from "../SectionContainer.jsx";
import {useHover} from "../../../hooks/useHover.js";

const Skills = function() {

    const [isHovered, onHover] = useHover();

    return(
        <SectionContainer onHover={onHover} id={"skillsSection"}>
            <div className={"border-0 border-white flex flex-col"}>
                <span className={"sectionHeader"}>Skills</span>
                <div className={"border-0 border-white flex p-4"}>
                    hi
                </div>
            </div>
        </SectionContainer>
    );

};

export {Skills as default};