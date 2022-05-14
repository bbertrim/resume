function Skills(props){
    return (
        <>
            <div class="category">
                <h2>{props.title}</h2>
                <ul>
                    { props.skills.map( skill => <li>{ skill }</li> ) }
                </ul>
            </div>
        </>
    );
}

export default Skills;