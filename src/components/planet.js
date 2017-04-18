import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';
import axios from 'axios'

class Planet extends Component {
    constructor(props){
        super(props);
        this.state = {
            planets: [],
        }
    }

    componentDidMount(){
        let _this = this;
        axios.get('http://swapi.co/api/planets')
        .then(function (response) {
            _this.setState({planets: response.data.results});
        })
    }
    render(){
        console.log(this.state.planets);
        let planets;
        if(this.state.planets){
            planets = this.state.planets.map((planet) => {
                return(<div className="col-md-12 content">
                            <h3>{planet.name}</h3>
                            <p><strong>Climate</strong>: {planet.climate}</p>
                            <p><strong>Gravity</strong>: {planet.gravity}</p>
                            <p><strong>Population</strong>: {planet.population}</p>
                            <p><strong>Diameter</strong>: {planet.diameter}</p>
                            <p><strong>Orbital Period</strong>: {planet.orbital_period}</p>
                            <p><strong>Rotaiton Period</strong>: {planet.rotation_period}</p>
                            <p><strong>Terrain</strong>: {planet.terrain}</p>
                        </div>       
                )
                
            });
            console.log(planets);
        }
        return (
            <div className="App">
                    {planets}
                    
            </div>
        );
    }
}
export default Planet;