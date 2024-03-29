import React from 'react';
import ReactDOM from 'react-dom';
//import {provider} from 'react-redux';
//import {createStore} from 'redux'; 
import './index.css';
//import App from './App';
//import {searchRobots} from './reducers';
import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';
import 'tachyons';
import Counter from './components/Counter';

ReactDOM.render(<Counter/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
