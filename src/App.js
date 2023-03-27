import React from 'react';
// import logo from './logo.svg'; 
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route, Routes} from "react-router-dom";
import Setting from "./components/Setting/Setting";


function App(props) {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/*" element={<Profile postData={props.postData}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
