import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from './Card';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';  // provides cool syntax

const root = ReactDOM.createRoot(document.getElementById('root')); 
// on loading the page App componenet gets mounted on documnet with id = root
// Mounting refers to replacing div having root id in indexedDB.html with App Component
root.render(
	<App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
