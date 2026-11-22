import SectionContainerContext from "../SectionContainerContext.jsx";
import {memo, useState} from "react";
import {Link} from "react-router";
import {useScrollToComponent} from "../../../hooks/useScrollToComponent.js";
import {useHover} from "../../../hooks/useHover.js";
import {useHoveredContext} from "../../../hooks/useHoveredContext.jsx";


const Footer = function(){

    return(
        <SectionContainerContext>
            <FooterSection />
        </SectionContainerContext>
    );
};

const FooterSection = function(){

    const [isHovered, onHover] = useHoveredContext();

    return(
        <div className="w-full h-auto border-0 border-white grid grid-cols-5 gap-[1em]">
            <div className="w-full h-auto col-span-2 flex flex-col items-start justify-start gap-2">
                <span className="text-[16px] font-[600] text-[var(--secondary-text)]">Anthony Sooroojbally</span>
                <p className={`text-[14px] font-[300] text-[var(${isHovered ? "--primary-text" : ""})] transition duration-250 ease-in-out`}>
                    What do i need to say about myself???
                </p>
            </div>
            <LinksColumn header={"Navigation"} hover={isHovered}
                         links={[
                             {text: "About Me", scrollToHref:"aboutMeSection"},
                             {text: "Skills", scrollToHref:"skillsSection"}, //scrollToComponent
                             {text: "Experience", scrollToHref:"workInProgressSection"},
                             {text: "Projects", scrollToHref:"workInProgressSection"}
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
                             {text: "sooroojballyanthony@gmail.com", href: "mailto:sooroojballyanthony@gmail.com"}
                         ]}/>
        </div>
    );
};

const LinksColumn = function ({header, links, hover}) {

    const scrollToComponent = useScrollToComponent();

    return(
        <div className="w-full h-auto flex flex-col items-start justify-start gap-2 text-[14px]">
            <span className={`text-[${hover ? "var(--secondary-text)" : ""}] font-[600]`}
                  style={{transition: "var(--standard-transition)"}}
            >{header}</span>
            {links?.map((link) => (<div key={`${link?.text}`}>
                {
                    link?.link ?
                        <Link to={link.link ?? "/"} target={link?.newTab ? "_blank" : ""} className={"hover:text-[var(--primary-text)]"}
                              style={{transition: "var(--standard-transition)"}}
                        >{link?.text}</Link>
                            :
                        link?.href ?
                            <a href={link.href} className={"hover:text-[var(--primary-text)] cursor-pointer"} style={{transition: "var(--standard-transition)"}}>
                                {link?.text}
                            </a>
                            :
                            link?.scrollToHref &&
                                <button onClick={()=>{scrollToComponent(link.scrollToHref);}} className={"hover:text-[var(--primary-text)] cursor-pointer"}
                                    style={{transition: "var(--standard-transition)"}}
                                >{link?.text}</button>
                }
            </div>))}
        </div>
    );
};


export {Footer as default};