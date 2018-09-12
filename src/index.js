import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import App from "./components/App/App.jsx"

// Renders App in the Router
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();

