import SectionContainer from "../SectionContainer.jsx";
import {memo, useState} from "react";
import {Link} from "react-router";
import {useScrollToComponent} from "../../../hooks/useScrollToComponent.js";
import {useHover} from "../../../hooks/useHover.js";


const Footer = function(){

    const [isHovered, onHover] = useHover();

    return(
        <SectionContainer onHover={onHover}>
            <div className="w-full h-auto border-0 border-white grid grid-cols-5 gap-[1em]">
                <div className="w-full h-auto col-span-2 flex flex-col items-start justify-start gap-2">
                    <span className="text-[16px] font-[600] text-[var(--secondary-text)]">Anthony Sooroojbally</span>
                    <p className={`text-[14px] font-[300] text-[var(${isHovered ? "--primary-text" : ""})] transition duration-250 ease-in-out`}>
                        What do i need to say about myself???
                    </p>
                </div>
                <LinksColumn header={"Navigation"} hover={isHovered}
                    links={[
                        {text: "About Me", href:"aboutMeSection"},
                        {text: "Skills", href:"skillsSection"}, //scrollToComponent
                        {text: "Experience", href:"workInProgressSection"},
                        {text: "Projects", href:"workInProgressSection"}
                    ]}/>
                <LinksColumn header={"Socials & Links"} hover={isHovered}
                     links={[
                         {text: "LinkedIn", link: "https://www.linkedin.com/in/anthony-sooroojbally-11a048340/", newTab: true},
                         {text: "GitHub", link: "https://github.com/asoorooj", newTab: true},
                         {text: "Instagram", link: "/"},
                         {text: "Figma", link: "/"}
                     ]}/>
                <LinksColumn header={"Contact Me"} hover={isHovered}
                         links={[
                             {text: "sooroojballyanthony@gmail.com", link: "/"}
                         ]}/>
            </div>
        </SectionContainer>
    );
};

const LinksColumn = function ({header, links, hover}) {

    const scrollToComponent = useScrollToComponent();

    return(
        <div className="w-full h-auto flex flex-col items-start justify-start gap-2 text-[14px]">
            <span className={`text-[${hover ? "var(--secondary-text)" : ""}] font-[600] transition duration-250 ease-in-out`}>{header}</span>
            {links?.map((link) => (<div key={`${link?.text}`}>
                {
                    link?.link ?
                        <Link to={link.link ?? "/"} target={link?.newTab ? "_blank" : ""} className={"hover:text-[var(--primary-text)] transition duration-250 ease-in-out"}>{link?.text}</Link>
                            :
                        link?.href &&
                            <button onClick={()=>{scrollToComponent(link.href);}} className={"hover:text-[var(--primary-text)] transition duration-250 ease-in-out cursor-pointer"}>{link?.text}</button>
                }
            </div>))}
        </div>
    );
};


export {Footer as default};