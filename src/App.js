import React from "react";
import Navbar from "./componens/Navbar";
import Header from "./componens/Header";
import Profile from "./componens/Profile";
import './App.css';

const App = () => {
	return (
		<div className="app-wrapper">
			<h1>helllo</h1>
			<Header />
			<Navbar />
			<Profile />
		</div>
	)
}

export default App;