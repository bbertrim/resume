import PrintHeader from '../PrintHeader/PrintHeader';

import CoverLetter from './components/CoverLetter';
import Page1 from './components/Page1';
import Page2 from './components/Page2';


export const PrintLayout = props => {
    return (
        <div id="printlayout">
            <div class="page">
                <CoverLetter />
            </div>

            <div class="page">
                <PrintHeader />
                <Page1 />
            </div>

            <div class="page">
                <PrintHeader />
                <Page2 />
            </div>
        </div>
    )
}

export default PrintLayout