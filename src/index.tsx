import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'rsuite/dist/styles/rsuite-default.css';
import './resetRsuite.scss'
import 'index.scss';

  ReactDOM.render(
    <App />,
  document.getElementById('root')
);

if (document.documentElement.clientWidth > 500){
  window.alert('请在手机上打开页面，以保证浏览效果');
}


