import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleHalfStroke, faBars, faAngleDown, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faSquareGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

library.add(faCircleHalfStroke, faBars, faSquareGithub, faAngleDown, faSquareEnvelope, faLinkedin)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
