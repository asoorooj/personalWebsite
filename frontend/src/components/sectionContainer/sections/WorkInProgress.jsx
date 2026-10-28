import SectionContainer from "../SectionContainer.jsx";
import "../../../index.css";
import {useHover} from "../../../hooks/useHover.js";

const WorkInProgress = function(){

    const [isHovered, onHover] = useHover();

    return(
        <SectionContainer onHover={onHover} id={"workInProgressSection"}>
            <div className="flex flex-col justify-center items-center w-full">
                <span className={`text-[2.5em] font-bold leading-none m-6 transition duration-250 ease-in-out
                ${isHovered ? "text-[var(--secondary-text)]" : ""}`}
                  style={{fontFamily:"var(--geist-mono-font-family)"}}>Work In Progress...</span>
            </div>
        </SectionContainer>
    );
};

export {WorkInProgress as default};