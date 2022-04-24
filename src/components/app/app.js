import Header from '../header/header'
import MainScreen from '../main-screen/main-screen'
import MedServices from '../med-services/med-services';
import './app.css'

const App = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <MainScreen/>
                <MedServices/>
            </div>
        </div>
    )
}

export default App;