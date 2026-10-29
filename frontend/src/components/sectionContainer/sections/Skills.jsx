import SectionContainer from "../SectionContainer.jsx";
import {useHover} from "../../../hooks/useHover.js";

const Skills = function({children}) {

    const [isHovered, onHover] = useHover();

    return(
        <SectionContainer onHover={onHover} id={"skillsSection"} sectionHeader={"Skills"}>
            <div className={"grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] w-full gap-[16px]"}>
                {children}
            </div>
        </SectionContainer>
    );

};

const SkillCard = function({skills, header, isSectionHovered}) {

    const [isHovered, onHover] = useHover();

    return(
        <div className={`border-2 flex-1 min-w-[320px] max-w-[400px] min-h-[160px] p-[16px] bg-[#0F0512] border-[#847C88] rounded-[4px] flex flex-col gap-[10px]
            ${isHovered ? "border-[#687971] bg-[#04190F]" : ""}`}
             style={{transition: "var(--standard-transition)"}}
            onMouseEnter={onHover} onMouseLeave={onHover}
        >
            <span className={`text-[1.5em] font-[600] ${isSectionHovered ? "text-[var(--secondary-text)]" : "" }`}
                  style={{fontFamily:"var(--geist-mono-font-family)", transition: "var(--standard-transition)"}}>
                &gt;&gt; {header}
            </span>
            <div className={"border-0 border-white p-[0.5em] flex gap-[0.5em] flex-wrap]"}>
                {skills?.map((skill) => (
                    <SkillBox skill={skill} isSectionHovered={isSectionHovered}/>
                ))}
            </div>
        </div>
    );
};

const SkillBox = function({skill, isSectionHovered}) {
    return(
        <div className={`border-[0.1em] p-[0.5em] rounded-[0.25em] flex 
            ${isSectionHovered ? 
            "border-[var(--secondary-text)] bg-[color-mix(in_srgb,var(--secondary-text)_25%,transparent)]" : 
            "border-[var(--secondary-text)] bg-[color-mix(in_srgb,var(--secondary-text)_25%,transparent)] opacity-50"}`}
             style={{transition: "var(--standard-transition)"}}>
                <span className={"text-[1.15em] text-[var(--secondary-text)] font-[300] inline-block border-0"}
                      style={{fontFamily:"var(--geist-mono-font-family)", transition: "var(--standard-transition)"}}>{skill}</span>
        </div>
    );
};

export {Skills as default, SkillCard};