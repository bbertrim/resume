

function Experience(props) {
    return (
        <div class="institution">
            <div class="overview">
                <div class="institutiontitle">{props.title}</div>
                <div class="institutionname">{props.company}</div>
                <div class="timescale">{props.date}</div>
            </div>
            <div class="description">
                { props.descriptionParagraphs.map( paragraph => <p>{ paragraph }</p> ) }
            </div>
        </div>
    );
}

export default Experience;