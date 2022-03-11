import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CoinsContext from './contexts/CoinsContext';

ReactDOM.render(<CoinsContext><App /></CoinsContext>,document.getElementById('root'));

