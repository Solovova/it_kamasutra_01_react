import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Content/Profile/Profile";
import Messages from "./components/Content/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Profile data={props.data.profile}/>*/}
                {/*<Messages data={props.data.messages}/>*/}
                <Route path='/profile' render={() =>
                    <Profile state={props.state.profile}/>
                }/>
                <Route path='/messages' render={() =>
                    <Messages state={props.state.messages}/>
                }/>
            </div>
        </div>
    );
}

export default App;
