export const SvgIcon = props => {
    const { path, width, height } = props;

    return (
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                { path }
            </svg>
        </div>
    )
};

SvgIcon.defaultProps = {
    width: 24,
    height: 24
}

export default SvgIcon;