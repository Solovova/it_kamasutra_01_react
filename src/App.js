import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Dialog from "./components/Dialog/Dialog";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Content}/>
                    <Route path='/messages' component={Dialog}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
