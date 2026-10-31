import SectionContainer from "../SectionContainer.jsx";
import {useHover} from "../../../hooks/useHover.js";
import {useHoveredContext} from "../../../hooks/useHoveredContext.jsx";
import {useLayoutEffect, useRef, useState} from "react";

const Skills = function({children}) {

    const [isHovered, onHover] = useHover();

    return(
        <SectionContainer onHover={onHover} id={"skillsSection"} sectionHeader={"Skills"}>
            <div className={"grid grid-cols-3 w-full gap-[16px]"}>
                {children}
            </div>
        </SectionContainer>
    );

};

const SkillCard = function({skills, header}) {

    const [isHovered, onHover] = useHover();

    const [isSectionHovered] = useHoveredContext();

    const [isExtended, setExtended] = useState(false);

    return(
        <div className={`border-2 w-full h-fit min-h-[0] p-[1em] bg-[#0F0512] border-[#847C88] rounded-[4px] flex flex-col gap-[10px]
            ${isHovered ? "border-[#687971] bg-[#04190F]" : ""}`}
             style={{transition: "var(--standard-transition)", cursor: isHovered ? "pointer" : "default"}}
            onMouseEnter={onHover} onMouseLeave={onHover} onClick={()=>{setExtended(prev => !prev);}}
        >
            <span className={`text-[1.25em] font-[600] ${isSectionHovered ? "text-[var(--secondary-text)]" : "" }`}
                  style={{fontFamily:"var(--geist-mono-font-family)", transition: "var(--standard-transition)"}}>
                &gt;&gt; {header}
            </span>
            {isExtended && <div className={"border-0 border-white p-[0.5em] flex gap-[0.5em] flex-wrap overflow-x-hidden"}>
                {skills?.map((skill) => (
                    <SkillBox skill={skill} isSectionHovered={isSectionHovered}/>
                ))}
            </div>}
        </div>
    );
};

const SkillBox = function({skill, isSectionHovered}) {
    return(
        <div className={`border-[0.1em] p-[0.25em] rounded-[0.25em] flex 
            ${isSectionHovered ? 
            "border-[var(--secondary-text)] bg-[color-mix(in_srgb,var(--secondary-text)_25%,transparent)]" : 
            "border-[var(--secondary-text)] bg-[color-mix(in_srgb,var(--secondary-text)_25%,transparent)] opacity-50"}`}
             style={{transition: "var(--standard-transition)"}}>
                <span className={"text-[1.0em] text-[var(--secondary-text)] font-[300] inline-block border-0"}
                      style={{fontFamily:"var(--geist-mono-font-family)", transition: "var(--standard-transition)"}}>{skill}</span>
        </div>
    );
};

export {Skills as default, SkillCard};