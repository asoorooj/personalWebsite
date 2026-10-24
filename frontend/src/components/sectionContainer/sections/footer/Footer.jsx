import SectionContainer from "../../SectionContainer.jsx";
import {memo, useState} from "react";
import {Link} from "react-router";


const Footer = function(){

    const [hover, setHover] = useState(false);

    const onHover = () => {
      setHover(!hover);
    };

    return(
        <SectionContainer onHover={onHover}>
            <div className="w-full h-auto border-0 border-white grid grid-cols-5 gap-[1em]">
                <div className="w-full h-auto col-span-2 flex flex-col items-start justify-start gap-2">
                    <span className="text-[16px] font-[600] text-[var(--secondary-text)]">Anthony Sooroojbally</span>
                    <p className={`text-[14px] font-[300] text-[var(${hover ? "--primary-text" : ""})] transition duration-250 ease-in-out`}>
                        What do i need to say about myself???
                    </p>
                </div>
                <LinksColumn header={"Navigation"} hover={hover}
                    links={[
                        {text: "Skills", link: "/"},
                        {text: "Experience", link: "/"},
                        {text: "Projects", link: "/"}
                    ]}/>
                <LinksColumn header={"Socials & Links"} hover={hover}
                     links={[
                         {text: "LinkedIn", link: "https://www.linkedin.com/in/anthony-sooroojbally-11a048340/", newTab: true},
                         {text: "GitHub", link: "https://github.com/asoorooj", newTab: true},
                         {text: "Instagram", link: "/"},
                         {text: "Figma", link: "/"}
                     ]}/>
                <LinksColumn header={"Contact Me"} hover={hover}
                         links={[
                             {text: "sooroojballyanthony@gmail.com", link: "/"}
                         ]}/>
            </div>
        </SectionContainer>
    );
};

const LinksColumn = function ({header, links, hover}) {
    return(
        <div className="w-full h-auto flex flex-col items-start justify-start gap-2 text-[14px]">
            <span className={`text-[${hover ? "var(--secondary-text)" : ""}] font-[600] transition duration-250 ease-in-out`}>{header}</span>
            {links?.map((link) => (
                <Link to={link?.link ?? "/"} target={link?.newTab ? "_blank" : ""} className={"hover:text-[var(--primary-text)] transition duration-250 ease-in-out"}>{link?.text}</Link>
            ))}
        </div>
    );
};


export {Footer as default};