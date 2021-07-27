import './stylesheets/App.scss';
import './stylesheets/Screen.scss';
import './stylesheets/Print.scss';
import PrintLayout from './components/PrintLayout/PrintLayout.js'
import ScreenLayout from './components/ScreenLayout/ScreenLayout.js'

function App() {
    return (
        <>
            <PrintLayout />
            <ScreenLayout />
        </>
    );
}

export default App;
