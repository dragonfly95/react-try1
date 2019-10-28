import React, {Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


import { Route } from 'react-router-dom';
import {Home, About} from './pages';

const Root = () => (
    <div>
    <a href="/">Home</a> ->
    <a href="/about">About</a> ->
    <a href="/app">App</a> ->
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/app" component={App}/>
    </BrowserRouter>
    </div>
)
export default Root;