import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Application from './components/application'
import './styles/index.css'

ReactDOM.render(<Application />, document.getElementById('root'));
serviceWorker.unregister();
