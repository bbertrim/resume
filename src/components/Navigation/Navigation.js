export const Navigation = props => {
    const {scrollPercentage} = props;

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

    const calculateTransparency = (target, dropoff, value) => {
        const min = 0.22;
        const max = 0.73;
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
                <ul>
                    <li style={{ borderColor: `rgba(40, 39, 43, ${calculateTransparency(0, 0.2, scrollPercentage)}`}}>
                        <a onClick={ () => scrollTo("#screenlayout #about-me")}>About Me</a>
                    </li>
                    <li style={{ borderColor: `rgba(40, 39, 43, ${calculateTransparency(0.35, 0.5, scrollPercentage)}`}}>
                        <a onClick={ () => scrollTo("#screenlayout #experience") }>Experience</a>
                    </li>
                    <li style={{ borderColor: `rgba(40, 39, 43, ${calculateTransparency(0.89, 0.1, scrollPercentage)}`}}>
                        <a onClick={ () => scrollTo("#screenlayout #skills") }>Skills & Expertise</a>
                    </li>
                    <li style={{ borderColor: `rgba(40, 39, 43, ${calculateTransparency(1, 0.2, scrollPercentage)}`}}>
                        <a onClick={ () => scrollTo("#screenlayout #education") }>Education</a>
                    </li>
                </ul>
            </content>
        </nav>
    )
};

export default Navigation;