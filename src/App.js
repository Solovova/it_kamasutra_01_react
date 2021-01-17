import './App.css';
import Header from "./components/Header";
import Navig from "./components/Navig";
import Content from "./components/Content";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header className='header' />

            <Navig className='nav' />

            <Content className='content' />
        </div>
    );
}

export default App;
