import React from "react";
import './App.css';
import Header from "./componens/Header/Header";
import Navbar from "./componens/Navbar/Navbar";
import Profile from "./componens/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./componens/Music/music";
import News from "./componens/News/news";
import Settings from "./componens/Settings/settings";
import DialogsContainer from "./componens/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer />}/>
                    <Route path="/profile"
                           render={() => <Profile />}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

