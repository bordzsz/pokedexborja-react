import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//https://dev.to/osmanforhad/react-js-warning-reactdomrender-is-no-longer-supported-in-react-18-use-createroot-instead-until-you-switch-to-the-new-api-1jhh
 
const root = ReactDOM.createRoot(
document.getElementById('root'));
  root.render(<App/>);
