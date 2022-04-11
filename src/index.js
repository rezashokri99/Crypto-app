import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CoinsContext from './contexts/CoinsContext';
import store from "./redux/store";
import { Provider } from "react-redux";
console.log(store);
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    ,document.getElementById('root'));

