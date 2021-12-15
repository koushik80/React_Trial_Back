import React from "react";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const R: React.FC = () => {
    return ( <
        div className = "App" >
        <
        Router >
        <
        div >
        <
        Link to = "/" > Home < /Link>{' '} <
        Link to = "/contact" > Contact < /Link>{' '} <
        Link to = "/about" > About < /Link>{' '} <
        Routes >
        <
        Route exact path = "/"
        element = { Home }
        /> <
        Route path = "/contact"
        element = { Contact }
        /> <
        Route path = "/about"
        element = { About }
        /> 

        <
        Route path = "*"
        component = { NotFound }
        /> < /
        Routes > < /
        div > <
        /Router> < /
        div >
    );
}


export default R;