/*
var React = require('react');
var ReactDOM = require('react-dom');
*/
import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, browserHistory} from 'react-router';
import {BrowserRouter, Route, browserHistory} from 'react-router-dom';
import App from './components/App.jsx';
import Menu from './components/Menu.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

ReactDOM.render(
    <BrowserRouter>
        <Menu history = {browserHistory} >
            <Route path = "/" />
            <Route path = "/home" component = {Home} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
        </Menu>
    </BrowserRouter>,
    document.getElementById('pageContent')
);