import Experience from '../../Shared/Experience';
import experienceData from "../../../data/experience.json";

function Page1(props){
    return (
        <section id="experience">
            <h1>Experience</h1>
            { experienceData.map( data => <Experience title={data.title} company={data.company} date={data.date} descriptionParagraphs={data.description} /> ) }
        </section>
    );
}
export default Page1;