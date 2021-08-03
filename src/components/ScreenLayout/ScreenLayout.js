import Navigation from '../Navigation/Navigation';
import ScreenHeader from '../ScreenHeader/ScreenHeader';
import signatureImage from '../../images/signature.png';

// import useScrollPercentage from '../../hooks/useScrollPercentage/useScrollPercentage';
import { useScrollPercentage } from 'react-scroll-percentage';

export const ScreenLayout = props => {

    const [scrollRef, scrollPercentage] = useScrollPercentage( { threshold: 0, });

    const normalizeNumber = (min, max, value) => {
        let result = 0;
        if(value < min){
            result = 0;
        } else if( value > max){
            result = 1;
        } else{
            result = (value - min) / (max - min);
        }
        return result;
    }

	return (
        <div id="screenlayout" ref={scrollRef}>
            <Navigation scrollPercentage={scrollPercentage}/>
            <content>
                <ScreenHeader />
                <section id="about-me" id="about-me">
                    <h1>About Me</h1>
                    <p>I am a motivated and enterprising individual. I’m especially drawn to expanding my knowledge and abilities by investigating innovative technologies and approaches to challenges and problems that I’m presented with. This has led me to have a very diversified skill set that continues to expand and allows me to bring a large amount of experience and perspective when working on solutions.</p>
                    <p>I bring with me experience working in and around the entirety of the development lifecycle, from conception and requirements gathering to launching and supporting the application. Additionally, I have experience working in multiple development and production environments/stacks. This includes Linux based systems running on bare metal, in Virtual Machines, Docker Containers running in Kubernetes as well applications deployed to cloud based services. Each with specific stacks for the given solution, be it lightweight micro services or larger web applications such as Liferay and Drupal.</p>
                    <p>Additionally, I have an interest in creative fields such as: Art, Writing and Game Design. This has led me to carry my art education on with Digital Painting/Drawing as a personal hobby. This has also led me to start up my own company, Scribulations Inc. in order to license and sell game assets.</p>
                    <div id="signature">
                        <p>Sincerely,</p>
                        <img src={signatureImage} alt="Signature: Bradley Bertrim" />
                        <p>Bradley Bertrim</p>
                    </div>
                </section>
                <section id="experience">
                    <h1>Experience</h1>
                    <div class="institution">
                        <div class="overview">
                            <div class="institutiontitle">Full Stack Developer</div>
                            <div class="institutionname">Empire Life</div>
                            <div class="timescale">2018-Present</div>
                        </div>
                        <div class="description">
                            <p>Roles Include: Frontend development (React and Python/Django), backend development (Python/Fast API, Java/Spring Boot), application and architecture design with RESTful APIs and Event Busses (Kafka and PubSub), infrastructure setup using Google Cloud Platform for cloud based applications and Rancher/Kubernetes for on-premises applications, architecting Docker based applications for both production builds with scaling in mind and to assist in local development environments, and developing Continuous Integration using CircleCI and Github Actions for both on-premise and in cloud.</p>
                        </div>
                    </div>

                    <div class="institution">
                        <div class="overview">
                            <div class="institutiontitle">Software Developer</div>
                            <div class="institutionname">Scribulations Inc.</div>
                            <div class="timescale">2016-Present</div>
                        </div>
                        <div class="description">
                            <p>Owner and operator of Scribulations Inc. The purpose of this company is to support the licensing of assets to third parties and market places. Some projects include:</p>
                            <p>ScribIoC, a light weight Inversion of Control framework designed for Unity3D and written in C#. This solves a problem in which the Unity Engine manages all construction of managed objects, however, only offers a slow dependency resolution solution using the Service Locator pattern and string lookups.</p>
                            <p>A node-based noise generator designed to simplify the use of coherent noise in procedural generation via a visual editor. Additionally, it will provide the ability to write custom generators/nodes and rules that allow the user to extend and customize its functionality.</p>
                        </div>
                    </div>

                    <div class="institution">
                        <div class="overview">
                            <div class="institutiontitle">Programmer Analyst</div>
                            <div class="institutionname">Queen's University</div>
                            <div class="timescale">2012-2018</div>
                        </div>
                        <div class="description">
                            <p>Roles included: Development lead for the MyQueensU Portal (Liferay/Spring/JavaEE), Web Publish developer (Drupal/PHP), development for standalone web applications (Symfony/PHP). Additional responsibilities: requirements gathering, database design, 1st/3rd party API integration, UX design, application administration, build solutions (Nexus/Maven), and docker environments.</p>
                        </div>
                    </div>

                    <div class="institution">
                        <div class="overview">
                            <div class="institutiontitle">Software Devloper</div>
                            <div class="institutionname">Fuel Cell Technologies</div>
                            <div class="timescale">2006</div>
                        </div>
                        <div class="description">
                            <p>During my final year of Computer Engineering we were tasked, as groups, to work as a contractor for a company. During this time, myself and two of my peers designed and developed a proof of concept communication protocol named “SOAP Utilized Delivery System” (SUDS) which was written in C++. It encapsulated their proprietary UDP protocol within the TCP transport layer. This protocol tunneled the communications between a centralized control system and a remote Fuel Cell which allowed control over the Internet. This allowed for easy setup as well as a reliable way to control the fuel cells remotely.</p>
                        </div>
                    </div>
                </section>

                <section id="skills">
                    <h1>SKILLS & EXPERTISE</h1>

                    <div class="category">
                        <h2>DEVELOPMENT</h2>
                        <ul>
                            <li>Bash</li>
                            <li>C++/C#</li>
                            <li>HTML/CSS/SASS</li>
                            <li>Java EE</li>
                            <li>JavaScript</li>
                            <li>Microsoft SQL</li>
                            <li>MySQL/MariaDB</li>
                            <li>PostgreSQL</li>
                            <li>PHP</li>
                            <li>Python</li>
                        </ul>
                    </div>

                    <div class="category">
                        <h2>FRAMEWORKS</h2>
                        <ul>
                            <li>AngularJS</li>
                            <li>Bootstrap</li>
                            <li>Django</li>
                            <li>Fast API</li>
                            <li>JQuery</li>
                            <li>React</li>
                            <li>Spring/Hibernate</li>
                            <li>Symfony/Doctrine</li>
                            <li>YUI/AlloyUI</li>
                        </ul>
                    </div>

                    <div class="category">
                        <h2>TECHNOLOGIES</h2>
                        <ul>
                            <li>Apache</li>
                            <li>Docker/Kubernetes</li>
                            <li>Drupal</li>
                            <li>GIT/SVN</li>
                            <li>Google Cloud Platform</li>
                            <li>Liferay</li>
                            <li>Maven/Gradle/NPM/PIP</li>
                            <li>Spring Boot</li>
                            <li>Tomcat/GlassFish/Nginx</li>
                            <li>Unity3D</li>
                        </ul>
                    </div>

                    <div class="category">
                        <h2>DESIGN</h2>
                        <ul>
                            <li>Adobe XD</li>
                            <li>Blender</li>
                            <li>Clip Studio Paint</li>
                            <li>Inkscape</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                </section>

                <section id="education">
                    <h1>Education</h1>
                    <div class="institution">
                        <div class="overview">
                            <div class="institutiontitle">Computer Programmer Analyst</div>
                            <div class="institutionname">St. Lawrence College</div>
                            <div class="timescale">2008-2011</div>
                        </div>
                        <div class="description">
                            <p>Advanced Diploma program that primarily focused on higher level software development which included C++, C#, Java, COBOL, JCL, PHP, and HTML/CSS. The final year required a work placement where I was placed at Queen’s University Information Technology Services. After placement I was hired on to fill the lead developer role for the MyQueen’sU service.</p>
                        </div>
                    </div>

                    <div class="institution">
                        <div class="overview">
                            <div class="institutiontitle">Computer Engineering Technology</div>
                            <div class="institutionname">St. Lawrence College</div>
                            <div class="timescale">2003-2006</div>
                        </div>
                        <div class="description">
                            <p>Advanced Diploma Program that focused on lower level software and hardware development as well as technical documentation. This included work with UML, integrated circuits, electronics, microcontrollers, 8086 assembly, C, C++, and MFC. In addition, there was a strong focus on core problem solving skills with: electronics, logic systems (Logic Gates and PIDs), classic software problems (Towers of Hanoi, Dining Philosophers, etc.), and core Object Oriented Concepts.</p>
                        </div>
                    </div>

                    <div class="institution">
                        <div class="overview">
                            <div class="institutiontitle">Art Fundamentals</div>
                            <div class="institutionname">Sheridan College</div>
                            <div class="timescale">2002-2003</div>
                        </div>
                        <div class="description">
                            <p>Certificate program that offered an introduction to the graphic arts with a focus on building a portfolio. My primary studies included: Colour theory, painting, 2D/3D design, drafting, rendering, imaging systems, and life drawing</p>
                        </div>
                    </div>
                </section>
                <div class="hint-bubble" style={{opacity: 1 - normalizeNumber(0.22, 0.73, scrollPercentage) / 0.2 }} >
                    <div class="text full">Looking for a PDF or printable version? You can use your browser's built in <button type="button" onClick={ () => window.print() }>Print</button> functionality for that!</div>
                    <div class="text minimal">Use your browser's <button type="button" onClick={ () => window.print() }>Print</button> functionality for a PDF/Print friendly version!</div>
                </div>
            </content>
		</div>
	)
}

export default ScreenLayout