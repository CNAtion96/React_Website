import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';
import axios from 'axios'

class Starship extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starships: [],
        }
    }

    componentDidMount(){
        let _this = this;
        axios.get('http://swapi.co/api/starships')
        .then(function (response) {
            _this.setState({starships: response.data.results});
        })
    }
    render(){
        console.log(this.state.starships);
        let starships;
        if(this.state.starships){
            starships = this.state.starships.map((starship) => {
                return(<div className="col-md-12 content">
                            <h3>{starship.name}</h3>
                            <p><strong>Model</strong>: {starship.model}</p>
                            <p><strong>Manufacturer</strong>: {starship.manufacturer}</p>
                            <p><strong>MGLT</strong>: {starship.MGLT}</p>
                            <p><strong>Cargo Capacity</strong>: {starship.cargo_capacity}</p>
                            <p><strong>Max Atmosphering Speed</strong>: {starship.max_atmosphering_speed}</p>
                            <p><strong>Length</strong>: {starship.length}</p>
                            <p><strong>Crew</strong>: {starship.crew}</p>
                            <p><strong>Paseangers</strong>: {starship.passengers}</p>
                            <p><strong>Hyperdrive Rating</strong>: {starship.hyperdrive_rating}</p>
                            <p><strong>Consumables</strong>: {starship.consumables}</p>
                            <p><strong>Cost in Credits</strong>: {starship.cost_in_credits}</p>
                        </div>       
                )
                
            });
            console.log(starships);
        }
        return (
            <div className="App">
                    {starships}
                    
            </div>
        );
    }
}
export default Starship;