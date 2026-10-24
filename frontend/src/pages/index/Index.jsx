import "./index.css";
import SectionContainer from "../../components/sectionContainer/SectionContainer.jsx";
import Footer from "../../components/sectionContainer/sections/footer/Footer.jsx";

const Index = function(){
    return(
        <div className="flex w-full h-full border-0 flex-col items-start justify-start">
            <SectionContainer />
            <Footer />
        </div>
    );
};

export {Index as default};