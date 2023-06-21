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
// import {updateNewPostText} from "./redux/store";


function App(props) {

    return (<div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/*" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs state={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/setting" element={<Setting/>}/>
                </Routes>
            </div>
        </div>);
}

export default App;
