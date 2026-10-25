import SectionContainer from "../SectionContainer.jsx";
import {useState} from "react";

const AboutMe = function () {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return(
        <SectionContainer onHover={onHover} id={"aboutMeSection"}>
            <div className={"w-[50%] h-full border-0 border-white flex flex-col items-start"}>
                <span className={"text-white leading-none text-[1.5em] font-medium mx-3"}>Hey, I'm</span>
                <span className={"text-[var(--secondary-text)] leading-none my-1 text-[4em] font-black"}
                      style={{fontFamily:"var(--geist-mono-font-family)"}}>ANTHONY</span>
                <span className={"text-white leading-none text-[1.5em] font-semibold"}>Full Stack Developer</span>
                <span className={`leading-none text-[1em] font-normal my-4 ${hover ? "text-[var(--secondary-text)]" : ""} transition duration-250 ease-in-out`}
                    style={{fontFamily:"var(--geist-mono-font-family)"}}>
                    Creating various tools with the latest technologies.
                </span>
                <span className={`leading-none text-[1em] font-normal my-0 leading-tight ${hover ? "text-[var(--secondary-text)]" : ""} transition duration-250 ease-in-out`}
                      style={{fontFamily:"var(--geist-mono-font-family)"}}>
                    Exploring different aspects of computing such application development,
                    machine learning and AI, hardware and graphics programming, etc.
                </span>
                <div className={"border-0 border-white w-full h-auto flex flex-row px-8 mt-8 gap-4"}>
                    <button className={"button solid"}>View Work -&gt;</button>
                    <button className={"button hollow"}>Contact ^o^</button>
                </div>
            </div>
        </SectionContainer>
    );
};

export {AboutMe as default};