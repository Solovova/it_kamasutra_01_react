import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Content/Profile/Profile";
import Messages from "./components/Content/Messages/Messages";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() =>
                    <Profile state={props.state.profileComp} store = {props.store}/>
                }/>
                <Route path='/messages' render={() =>
                    <Messages state={props.state.messagesComp} store = {props.store}/>
                }/>
            </div>
        </div>
    );
}

export default App;
