import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context';
import * as serviceWorker from './serviceWorker';

//To use our routes in whole application we need to wrap our 
//App component inside Router component(i.e. BrowserRouter)
ReactDOM.render(
    <ProductProvider>
        <Router>
            <App />
        </Router>
    </ProductProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
