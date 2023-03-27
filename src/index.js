import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
let dialogs = [
    {id: 1, name: 'Vlad'},
    {id: 2, name: 'Evgenie'},
    {id: 3, name: 'Victor'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Nastya'},
    {id: 6, name: 'Vlad'}
]
let messages = [
    {id: 1, message: 'HI how are you?'},
    {id: 2, message: 'Whats up you?'},
    {id: 3, message: 'Whats up man?'},
    {id: 4, message: 'I am fine'},
    {id: 5, message: 'and u?'},
    {id: 6, message: 'good'}
]
let postData = [
    {id:1, message:"Hi, how are you?", like: 24},
    {id:2, message:"hello world", like:13}
]
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={dialogs} messages={messages} postData={postData}/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
