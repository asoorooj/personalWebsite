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
                    <SkillCard header={"Programming Languages"}
                               skills={["Java", "JavaScript", "TypeScript", "Python", "SQL", "C", "C++", "HTML", "CSS"]}/>
                    <SkillCard header={"Frontend & Backend"}
                               skills={["React", "React Native", "Spring Boot", "Flask", "Express.js", "RESTful APIs", "SOAP APIs",
                                   "JUnit", "Mockito", "Vitest", "Github Actions"]}/>
                    <SkillCard header={"Data Technologies"}
                               skills={["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Firebase",
                                   "JPA/Hibernate", "NumPy", "pandas", "Hadoop", "Spark"]}/>
                <SkillCard header={"Dev Tools"}
                           skills={["Git", "Jira", "Confluence", "Docker", "AWS", "CloudWatch", "Figma", "Red Hat Openshift",
                               "Postman", "Microsoft Office Suite"]}/>
                <SkillCard header={"Computer Science"}
                           skills={["Data Structures & Algorithms", "Relational Databases", "Database Schema Design",
                               "CRUD Operations", "Data Cleaning", "CI/CD"]}/>
            </Skills>
            <WorkInProgress />
            <Footer />
        </div>
    );
};

export {Index as default};