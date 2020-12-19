import React from "react";
import './App.css';
import Header from "./componens/Header/Header";
import Navbar from "./componens/Navbar/Navbar";
import Profile from "./componens/Profile/Profile";
import Dialogs from "./componens/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./componens/Music/music";
import News from "./componens/News/news";
import Settings from "./componens/Settings/settings";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/profile"
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                           />}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

