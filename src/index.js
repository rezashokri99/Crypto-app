import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CoinsContext from './contexts/CoinsContext';

ReactDOM.render(
    <BrowserRouter>
        <CoinsContext>
            <App />
        </CoinsContext>
    </BrowserRouter>
    ,document.getElementById('root'));

