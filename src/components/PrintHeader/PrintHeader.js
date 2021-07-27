import PhoneIcon from '../Icons/PhoneIcon';
import EmailIcon from '../Icons/EmailIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';

export const PrintHeader = props => {

    return (
        <header>
            <content>
                <namecard>
                    <h1>Bradley Bertrim</h1>
                    <h2>Full Stack Developer</h2>
                </namecard>
                <socials>
                    <social class="phone">
                        <a href="tel:613-483-7030"><PhoneIcon color="#081126" /><span>(613) 483 7030</span></a>
                    </social>
                    <social class="email">
                        <a href="mailto:bertrimbradley@gmail.com"><EmailIcon color="#081126" /><span>bertrimbradley@gmail.com</span></a>
                    </social>
                    <social class="linkedin">
                        <a href="https://www.linkedin.com/in/bbertrim/"><LinkedInIcon color="#081126" /><span>/bbertrim</span></a>
                    </social>
                </socials>
            </content>
        </header>
    )
};

export default PrintHeader;