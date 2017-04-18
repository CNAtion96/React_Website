import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './App';
import './index.css';
import {Router, Route, browserHistory, Link} from 'react-router';
import Film from './components/film';
import Person from './components/person';
import Planet from './components/planet'
import Starship from './components/starship';
import Species from './components/species';
import Vehicle from './components/vehicle';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Home}  path="/">
        <Route path="/films" component={Film}/>
        <Route path="/people" component={Person}/>
        <Route path="/planets" component={Planet}/>
        <Route path="/species" component={Species}/>
        <Route path="/starships" component={Starship}/>
        <Route path="/vehicles" component={Vehicle}/>
        </Route>
    </Router>,
  document.getElementById('root')
);