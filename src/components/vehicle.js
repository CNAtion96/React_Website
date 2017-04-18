import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';
import axios from 'axios';

class Vehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: [],
        }
    }
    
    componentDidMount(){
        let _this = this;
        axios.get('http://swapi.co/api/vehicles')
        .then(function (response) {
            _this.setState({vehicles: response.data.results});
        })
    }
    render(){
        console.log(this.state.vehicles);
        let vehicles;
        if(this.state.vehicles){
            vehicles = this.state.vehicles.map((vehicle) => {
                return(<div className="col-md-12 content">
                            <h3>{vehicle.name}</h3>
                            <p><strong>Model</strong>: {vehicle.model}</p>
                            <p><strong>Manufacturer</strong>: {vehicle.manufacturer}</p>
                            <p><strong>Vehicle Class</strong>: {vehicle.vehicle_class}</p>
                            <p><strong>Cargo Capacity</strong>: {vehicle.cargo_capacity}</p>
                            <p><strong>Max Atmosphering Speed</strong>: {vehicle.max_atmosphering_speed}</p>
                            <p><strong>Length</strong>: {vehicle.length}</p>
                            <p><strong>Crew</strong>: {vehicle.crew}</p>
                            <p><strong>Paseangers</strong>: {vehicle.passengers}</p>
                            <p><strong>Consumables</strong>: {vehicle.consumables}</p>
                            <p><strong>Cost in Credits</strong>: {vehicle.cost_in_credits}</p>
                        </div>       
                )
                
            });
            console.log(vehicles);
        }
        return (
            <div className="App">
                    {vehicles}
            </div>
        );
    }
}
export default Vehicle;