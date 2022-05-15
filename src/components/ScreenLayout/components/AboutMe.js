import signatureImage from '../../../images/signature.png';

function AboutMe(props){
    return (
        <>
            <p>I am a motivated and enterprising individual. I'm especially drawn to expanding my knowledge and abilities by investigating innovative technologies and approaches to challenges and problems that I'm presented with. This has led me to have a very diversified skill set that continues to expand and allows me to bring a large amount of experience and perspective when working on solutions.</p>
            <p>I bring with me experience working in and around the entirety of the development lifecycle, from conception and requirements gathering to launching and supporting the application. Additionally, I have experience working in multiple development and production environments/stacks. This includes Linux based systems running on bare metal, in Virtual Machines, Docker Containers running in Kubernetes as well applications deployed to cloud based services. Each with specific stacks for the given solution, be it lightweight micro services or larger web applications such as Liferay and Drupal. This also includes work with cloud infrastructure and CI/CD pipelines</p>
            <p>Additionally, I have an interest in creative fields such as: Art, Writing and Game Design. This has led me to carry my art education on with Digital Painting/Drawing as a personal hobby. This has also led me to start up my own company, Scribulations Inc. in order to license and sell game assets.</p>
            <div id="signature">
                <p>Sincerely,</p>
                <img src={signatureImage} alt="Signature: Bradley Bertrim" />
                <p>Bradley Bertrim</p>
            </div>
        </>
    );
}

export default AboutMe;