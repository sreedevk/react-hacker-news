import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css'
import Application from './components/application'

ReactDOM.render(<Application />, document.getElementById('root'));
serviceWorker.unregister();
