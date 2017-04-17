import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory, Link} from 'react-router';
import './App.css';
import Film from './components/film';
import Person from './components/person';
import Planet from './components/planet';
import Starship from './components/starship';
import Species from './components/species';
import Vehicle from './components/vehicle';
import axios from 'axios'

class Home extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            films:[],
            people: [],
            planets: [],
            species:[],
            starships: [],
            vehicles: [],
        }
    }
    
    getFilms(){
        axios.get('http://swapi.co/api/films')
        .then(function (response) {
            this.setState({films: response});
        }.bind(this))
    }

    getPeople(){
        axios.get('http://swapi.co/api/people')
        .then(function (response) {
        this.setState({people: response});
        }.bind(this))
    }

    getPlanets(){
        axios.get('http://swapi.co/api/planets')
        .then(function (response) {
        this.setState({planets: response});
        }.bind(this))
    }

    getSpecies(){
        axios.get('http://swapi.co/api/species')
        .then(function (response) {
        this.setState({species: response});
        }.bind(this))
    }

    getStarships(){
        axios.get('http://swapi.co/api/starships')
        .then(function (response) {
        this.setState({starships: response});
        }.bind(this))
    }

    getVehicles(){
        axios.get('http://swapi.co/api/vehicles')
        .then(function (response) {
        this.setState({vehicles: response});
        }.bind(this))
    }

    componentWillMount(){
        this.getFilms();
        this.getPeople();
        this.getPlanets();
        this.getSpecies();
        this.getStarships();
        this.getVehicles();
        console.log(this.state);
    }

    render(){
        return (
            <div className="App">
                    <div className="col-md-12 stars"></div>
                    <div className="col-md-12 twinkling"><div>
                            <h2>Starbrary</h2>
                        
                        <ul className="navigation">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/films"> Films </Link></li>
                                <li><Link to="/people"> People </Link></li>
                                <li><Link to="/planets"> Planets </Link></li>
                                <li><Link to="/species"> Species </Link></li>
                                <li><Link to="/starships"> Starships </Link></li>
                                <li><Link to="/vehicles">Vehicles</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-12 content">
                             <p>Your number one location for all things starwars</p>
                        </div>
                    </div>
            </div>
        );
    }
}

render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/films" component={Film}/>
        <Route path="/people" component={Person}/>
        <Route path="/planets" component={Planet}/>
        <Route path="/species" component={Species}/>
        <Route path="/starships" component={Starship}/>
        <Route path="/vehicles" component={Vehicle}/>
    </Router>,
    document.getElementById('root')
);
