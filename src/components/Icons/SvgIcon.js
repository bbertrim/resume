export const SvgIcon = props => {
    const { path } = props;

    return (
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                { path }
            </svg>
        </div>
    )
};

export default SvgIcon;