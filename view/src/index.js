import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Assets/CSS/Index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

