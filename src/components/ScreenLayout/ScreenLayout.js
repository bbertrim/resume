import React from 'react';
import { getMinMaxScrollRange, normalizeNumber } from '../../helpers';
import { useScrollPercentage } from 'react-scroll-percentage';

// Section Components
import ScreenHeader from './components/ScreenHeader';
import AboutMe from './components/AboutMe';
import Navigation from './components/Navigation';
import Experience from '../shared/Experience';
import Skills from '../shared/Skills';
import Education from '../shared/Education';

// Data
import experienceData from '../../data/experience';
import educationData from '../../data/education';
import skillData from '../../data/skills.json';
import GithubBadge from '../Icons/GithubBadge';

export const ScreenLayout = props => {

    const visualViewport = window.visualViewport;
    let viewportHeight = 937; // Default best guess for 1080p
    if(visualViewport){       // Firefox doesn't always populate this?
        viewportHeight = visualViewport.height;
    } else if (window.innerHeight) {
        viewportHeight = window.innerHeight;
    }

    const [scrollRef, scrollPercentage] = useScrollPercentage( { threshold: 0, });
    const [minScroll, maxScroll] = getMinMaxScrollRange(viewportHeight);

	return (
        <div id="screenlayout" ref={scrollRef}>
            <Navigation scrollPercentage={scrollPercentage} minScroll={minScroll} maxScroll={maxScroll} />
            <content>
                <ScreenHeader />
                <section id="about-me">
                    <h1>About Me</h1>
                    <AboutMe />
                </section>

                <section id="experience">
                    <h1>Experience</h1>
                    { experienceData.map( data => <Experience title={data.title} company={data.company} date={data.date} descriptionParagraphs={data.description} /> ) }
                </section>

                <section id="skills">
                    <h1>Skills &amp; Expertise</h1>
                    { skillData.map( data => <Skills title={ data.title } skills={ data.skills } /> ) }

                </section>

                <section id="education">
                    <h1>Education</h1>
                    { educationData.map( data => <Education course={data.course} school={data.school} date={data.date} descriptionParagraphs={data.description} /> ) }
                </section>

                <div class="hint-bubble" style={{opacity: 1 - normalizeNumber( minScroll, maxScroll, scrollPercentage) / 0.2 }} >
                    <div class="text full">Looking for a PDF or printable version? You can use your browser's built in <button type="button" onClick={ () => window.print() }>Print</button> functionality for that!</div>
                    <div class="text minimal">Use your browser's <button type="button" onClick={ () => window.print() }>Print</button> functionality for a PDF/Print friendly version!</div>
                </div>

                <GithubBadge />
            </content>
		</div>
	)
}

export default ScreenLayout