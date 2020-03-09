import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/App';
import Preview from './components/preview/preview';
import Counter from './components/timer/index';

ReactDOM.render(<Preview />, document.getElementById('root'));
ReactDOM.render(<Counter />, document.getElementById("interval"));


