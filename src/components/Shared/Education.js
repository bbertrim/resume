function Education(props){
    return (
        <div class="institution">
            <div class="overview">
                <div class="institutiontitle">{ props.course }</div>
                <div class="institutionname">{ props.school }</div>
                <div class="timescale">{ props.date }</div>
            </div>
            <div class="description">
                { props.descriptionParagraphs.map( paragraph => <p>{ paragraph }</p> ) }
            </div>
        </div>
    );
}

export default Education;