import PhoneIcon from '../../Icons/PhoneIcon';
import EmailIcon from '../../Icons/EmailIcon';
import LinkedInIcon from '../../Icons/LinkedInIcon';

function PrintHeader() {
    return (
        <header>
            <content>
                <div id="namecard">
                    <h1>Bradley Bertrim</h1>
                    <h2>Full Stack Developer</h2>
                </div>
                <div id="socials">
                    <div class="social phone">
                        <a href="tel:613-483-7030"><PhoneIcon color="#081126" /><span>(613) 483 7030</span></a>
                    </div>
                    <div class="social email">
                        <a href="mailto:bertrimbradley@gmail.com"><EmailIcon color="#081126" /><span>bertrimbradley@gmail.com</span></a>
                    </div>
                    <div class="social linkedin">
                        <a href="https://www.linkedin.com/in/bbertrim/"><LinkedInIcon color="#081126" /><span>/bbertrim</span></a>
                    </div>
                </div>
            </content>
        </header>
    )
};

export default PrintHeader;