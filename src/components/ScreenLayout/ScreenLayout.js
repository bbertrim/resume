import PrintHeader from '../PrintHeader/PrintHeader';
import signatureImage from '../../images/signature.png';

export const ScreenLayout = props => {

	return (
        <screenlayout>
            <content>
                <PrintHeader />
                <section id="about-me">
                    <h1>About Me</h1>
                    <p>I am a motivated and enterprising individual. I’m especially drawn to expanding my knowledge and abilities by investigating innovative technologies and approaches to challenges and problems that I’m presented with. This has led me to have a very diversified skill set that continues to expand and allows me to bring a large amount of experience and perspective when working on solutions.</p>
                    <p>I bring with me experience working in and around the entirety of the development lifecycle, from conception and requirements gathering to launching and supporting the application. Additionally, I have experience working in multiple development and production environments/stacks. This includes Linux based systems running on bare metal, in Virtual Machines, Docker Containers running in Kubernetes as well applications deployed to cloud based services. Each with specific stacks for the given solution, be it lightweight micro services or larger web applications such as Liferay and Drupal.</p>
                    <p>Additionally, I have an interest in creative fields such as: Art, Writing and Game Design. This has led me to carry my art education on with Digital Painting/Drawing as a personal hobby. This has also led me to start up my own company, Scribulations Inc. in order to license and sell game assets.</p>
                    <signature>
                        <p>Sincerely,</p>
                        <img src={signatureImage} alt="Signature: Bradley Bertrim" />
                        <p>Bradley Bertrim</p>
                    </signature>
                </section>
                <section>
                    <h1>Experience</h1>
                    <institution>
                        <overview>
                            <institutiontitle>Full Stack Developer</institutiontitle>
                            <institutionname>Empire Life</institutionname>
                            <timescale>2018-Present</timescale>
                        </overview>
                        <description>
                            <p>Roles Include: Frontend development (React and Python/Django), backend development (Python/Fast API, Java/Spring Boot), application and architecture design with RESTful APIs and Event Busses (Kafka and PubSub), infrastructure setup using Google Cloud Platform for cloud based applications and Rancher/Kubernetes for on-premises applications, architecting Docker based applications for both production builds with scaling in mind and to assist in local development environments, and developing Continuous Integration using CircleCI and Github Actions for both on-premise and in cloud.</p>
                        </description>
                    </institution>

                    <institution>
                        <overview>
                            <institutiontitle>Software Developer</institutiontitle>
                            <institutionname>Scribulations Inc.</institutionname>
                            <timescale>2016-Present</timescale>
                        </overview>
                        <description>
                            <p>Owner and operator of Scribulations Inc. The purpose of this company is to support the licensing of assets to third parties and market places. Some projects include:</p>
                            <p>ScribIoC, a light weight Inversion of Control framework designed for Unity3D and written in C#. This solves a problem in which the Unity Engine manages all construction of managed objects, however, only offers a slow dependency resolution solution using the Service Locator pattern and string lookups.</p>
                            <p>A node-based noise generator designed to simplify the use of coherent noise in procedural generation via a visual editor. Additionally, it will provide the ability to write custom generators/nodes and rules that allow the user to extend and customize its functionality.</p>
                        </description>
                    </institution>

                    <institution>
                        <overview>
                            <institutiontitle>Programmer Analyst</institutiontitle>
                            <institutionname>Queen's University</institutionname>
                            <timescale>2012-2018</timescale>
                        </overview>
                        <description>
                            <p>Roles included: Development lead for the MyQueensU Portal (Liferay/Spring/JavaEE), Web Publish developer (Drupal/PHP), development for standalone web applications (Symfony/PHP). Additional responsibilities: requirements gathering, database design, 1st/3rd party API integration, UX design, application administration, build solutions (Nexus/Maven), and docker environments.</p>
                        </description>
                    </institution>

                    <institution>
                        <overview>
                            <institutiontitle>Software Devloper</institutiontitle>
                            <institutionname>Fuel Cell Technologies</institutionname>
                            <timescale>2006</timescale>
                        </overview>
                        <description>
                            <p>During my final year of Computer Engineering we were tasked, as groups, to work as a contractor for a company. During this time, myself and two of my peers designed and developed a proof of concept communication protocol named “SOAP Utilized Delivery System” (SUDS) which was written in C++. It encapsulated their proprietary UDP protocol within the TCP transport layer. This protocol tunneled the communications between a centralized control system and a remote Fuel Cell which allowed control over the Internet. This allowed for easy setup as well as a reliable way to control the fuel cells remotely.</p>
                        </description>
                    </institution>
                </section>

                <section id="skills-and-expertise">
                    <h1>SKILLS & EXPERTISE</h1>

                    <category>
                        <h2>DEVELOPMENT</h2>
                        <ul>
                            <li>Bash</li>
                            <li>C++/C#</li>
                            <li>HTML/CSS/SASS</li>
                            <li>Java EE</li>
                            <li>JavaScript</li>
                            <li>MySQL/MariaDB/OracleDB</li>
                            <li>PHP</li>
                            <li>Python</li>
                        </ul>
                    </category>

                    <category>
                        <h2>FRAMEWORKS</h2>
                        <ul>
                            <li>AngularJS</li>
                            <li>Bootstrap</li>
                            <li>Django</li>
                            <li>JQuery</li>
                            <li>React</li>
                            <li>Spring/Hibernate</li>
                            <li>Symfony/Doctrine</li>
                            <li>YUI/AlloyU</li>
                        </ul>
                    </category>

                    <category>
                        <h2>TECHNOLOGIES</h2>
                        <ul>
                            <li>Apache</li>
                            <li>Docker/Kubernetes</li>
                            <li>Drupal</li>
                            <li>GIT/SVN</li>
                            <li>Liferay</li>
                            <li>Maven/Gradle/NPM/PIP</li>
                            <li>Spring Boot</li>
                            <li>Tomcat/GlassFish/Nginx</li>
                            <li>Unity3D</li>
                        </ul>
                    </category>

                    <category>
                        <h2>DESIGN</h2>
                        <ul>
                            <li>Adobe XD</li>
                            <li>Blender</li>
                            <li>Clip Studio Paint</li>
                            <li>Inkscape</li>
                            <li>Photoshop</li>
                        </ul>
                    </category>
                </section>

                <section>
                    <h1>Education</h1>
                    <institution>
                        <overview>
                            <institutiontitle>Computer Programmer Analyst</institutiontitle>
                            <institutionname>St. Lawrence College</institutionname>
                            <timescale>2008-2011</timescale>
                        </overview>
                        <description>
                            <p>Advanced Diploma program that primarily focused on higher level software development which included C++, C#, Java, COBOL, JCL, PHP, and HTML/CSS. The final year required a work placement where I was placed at Queen’s University Information Technology Services. After placement I was hired on to fill the lead developer role for the MyQueen’sU service.</p>
                        </description>
                    </institution>

                    <institution>
                        <overview>
                            <institutiontitle>Computer Engineering Technology</institutiontitle>
                            <institutionname>St. Lawrence College</institutionname>
                            <timescale>2003-2006</timescale>
                        </overview>
                        <description>
                            <p>Advanced Diploma Program that focused on lower level software and hardware development as well as technical documentation. This included work with UML, integrated circuits, electronics, microcontrollers, 8086 assembly, C, C++, and MFC. In addition, there was a strong focus on core problem solving skills with: electronics, logic systems (Logic Gates and PIDs), classic software problems (Towers of Hanoi, Dining Philosophers, etc.), and core Object Oriented Concepts.</p>
                        </description>
                    </institution>

                    <institution>
                        <overview>
                            <institutiontitle>Art Fundamentals</institutiontitle>
                            <institutionname>Sheridan College</institutionname>
                            <timescale>2002-2003</timescale>
                        </overview>
                        <description>
                            <p>Certificate program that offered an introduction to the graphic arts with a focus on building a portfolio. My primary studies included: Colour theory, painting, 2D/3D design, drafting, rendering, imaging systems, and life drawing</p>
                        </description>
                    </institution>
                </section>
            </content>
		</screenlayout>
	)
}

export default ScreenLayout