import React from "react";
import './App.css';
import Header from "./componens/Header/Header";
import Navbar from "./componens/Navbar/Navbar";
import Profile from "./componens/Profile/Profile";
import Dialogs from "./componens/Dialogs/Dialogs";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />

			<div class='app-wrapper-content'>
				<Dialogs />
			</div>
			{/*<Profile />*/}
		</div>
	)
}

export default App;

