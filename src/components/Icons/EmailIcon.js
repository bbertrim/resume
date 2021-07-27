import SvgIcon from "./SvgIcon";

export const EmailIcon = props => {
    const { color } = props;

    return (
        <SvgIcon path={( <path fill={color} d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/> )} />
    )
};

export default EmailIcon;