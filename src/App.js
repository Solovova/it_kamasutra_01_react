import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://retailandhospitalityhub.com/wp-content/uploads/2018/11/img.jpg'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>
                        Profile
                    </a>
                </div>
                <div>
                    <a>
                        Messages
                    </a>
                </div>
                <div>
                    <a>
                        News
                    </a>
                </div>
                <div>
                    <a>
                        Music
                    </a>
                </div>
                <div></div>
                <div>
                    <a>
                        Settings
                    </a>
                </div>
            </nav>

            <div className='content'>
                <div>
                    Ava + descr
                </div>
                <div>
                    New posts
                </div>
                <div>
                    My posts
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;
