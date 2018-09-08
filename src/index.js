import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import Main from "./Main";

// this component will be rendered by our <___Router>
const App = () => (
    <div>
        <Header />
        <Main />
    </div>
)

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();

