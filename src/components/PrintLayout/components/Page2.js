import Education from '../../Shared/Education';
import Skills from '../../Shared/Skills';

import educationData from "../../../data/education.json";
import skillData from "../../../data/skills.json";

function Page2(props){
    return (
        <>
            <section id="skills">
                <h1>Skills &amp; Expertise</h1>
                { skillData.map( data => <Skills title={ data.title } skills={ data.skills } /> ) }

            </section>

            <section id="education">
                <h1>Education</h1>
                { educationData.map( data => <Education course={data.course} school={data.school} date={data.date} descriptionParagraphs={data.description} /> ) }
            </section>
        </>
    );
}
export default Page2;