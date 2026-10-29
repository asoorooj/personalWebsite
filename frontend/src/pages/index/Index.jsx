import "./index.css";
import SectionContainer from "../../components/sectionContainer/SectionContainer.jsx";
import Footer from "../../components/sectionContainer/sections/Footer.jsx";
import WorkInProgress from "../../components/sectionContainer/sections/WorkInProgress.jsx";
import AboutMe from "../../components/sectionContainer/sections/AboutMe.jsx";
import Skills, {SkillCard} from "../../components/sectionContainer/sections/Skills.jsx";

const Index = function(){
    return(
        <div className="flex border-0 border-red-200 flex-col items-start justify-start">
            {/*<SectionContainer />*/}
            <AboutMe />
            <Skills>
                <SkillCard header={"Samba"} skills={["hi", "bye"]}/>
            </Skills>
            <WorkInProgress />
            <Footer />
        </div>
    );
};

export {Index as default};