import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Dialog from "./components/Dialog/Dialog";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                {/*<Dialog />*/}
                <Content />
            </div>
        </div>
    );
}

export default App;
