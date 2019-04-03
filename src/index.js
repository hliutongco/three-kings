import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/background.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './reducer'
import firebase from '@firebase/app';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: "poised-throne-236517"
};

firebase.initializeApp(config);

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
