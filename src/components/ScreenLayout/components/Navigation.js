import { normalizeNumber } from "../../../helpers";

export const Navigation = props => {
    const {scrollPercentage, minScroll, maxScroll} = props;

    const calculateTransparency = (target, dropoff, minScroll, maxScroll, value) => {
        const min = minScroll;
        const max = maxScroll;
        const normalizedValue = normalizeNumber(min, max, value)
        const delta = Math.abs(target - normalizedValue)
        return 1 - (delta / dropoff);
    }

    const scrollTo = selector => {
        const element = document.querySelector(selector);
        if(element){
            const topOfElement = element.offsetTop - 180;
            window.scroll({ top: topOfElement, behavior: "smooth" });
        }
    }

    return (
        <nav>
            <content>
                {/* { scrollPercentage.toFixed(2) * 100 }% */}
                <ul>
                    <li style={{ borderColor: `rgba(40, 39, 43, ${calculateTransparency(0, 0.2, minScroll, maxScroll, scrollPercentage)}`}}>
                        <button onClick={ () => scrollTo("#screenlayout #about-me")}>About Me</button>
                    </li>
                    <li style={{ borderColor: `rgba(40, 39, 43, ${calculateTransparency(0.35, 0.5, minScroll, maxScroll, scrollPercentage)}`}}>
                        <button onClick={ () => scrollTo("#screenlayout #experience") }>Experience</button>
                    </li>
                    <li style={{ borderColor: `rgba(40, 39, 43, ${calculateTransparency(0.89, 0.2, minScroll, maxScroll, scrollPercentage)}`}}>
                        <button onClick={ () => scrollTo("#screenlayout #skills") }>Skills & Expertise</button>
                    </li>
                    <li style={{ borderColor: `rgba(40, 39, 43, ${calculateTransparency(1, 0.2, minScroll, maxScroll, scrollPercentage)}`}}>
                        <button onClick={ () => scrollTo("#screenlayout #education") }>Education</button>
                    </li>
                </ul>
            </content>
        </nav>
    )
};

export default Navigation;