import "./index.css";
import SectionContainer from "../../components/sectionContainer/SectionContainer.jsx";
import Footer from "../../components/sectionContainer/sections/Footer.jsx";
import WorkInProgress from "../../components/sectionContainer/sections/WorkInProgress.jsx";
import AboutMe from "../../components/sectionContainer/sections/AboutMe.jsx";

const Index = function(){
    return(
        <div className="flex w-full h-full border-0 flex-col items-start justify-start">
            {/*<SectionContainer />*/}
            <AboutMe />
            <WorkInProgress />
            <Footer />
        </div>
    );
};

export {Index as default};