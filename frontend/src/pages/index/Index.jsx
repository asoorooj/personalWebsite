import "./index.css";
import SectionContainer from "../../components/sectionContainer/SectionContainer.jsx";
import Footer from "../../components/sectionContainer/sections/footer/Footer.jsx";
import WorkInProgress from "../../components/sectionContainer/sections/workInProgress/WorkInProgress.jsx";

const Index = function(){
    return(
        <div className="flex w-full h-full border-0 flex-col items-start justify-start">
            <SectionContainer />
            <SectionContainer />
            <SectionContainer />
            <SectionContainer />
            <SectionContainer />
            <SectionContainer />
            <SectionContainer />
            <SectionContainer />
            <SectionContainer />
            <WorkInProgress />
            <Footer />
        </div>
    );
};

export {Index as default};