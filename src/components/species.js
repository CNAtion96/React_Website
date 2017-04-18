import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';
import axios from 'axios';

class Species extends Component {
    constructor(props) {
        super(props);
        this.state = {
            species: [],
        }
    }

    componentDidMount(){
        let _this = this;
        axios.get('http://swapi.co/api/species')
        .then(function (response) {
            _this.setState({species: response.data.results});
        })
    }
    render(){
        console.log(this.state.species);
        let species;
        if(this.state.species){
            species = this.state.species.map((spec) => {
                return(<div className="col-md-12 content">
                            <h3>{spec.name}</h3>
                            <p><strong>Skin Color(s)</strong>: {spec.skin_colors}</p>
                            <p><strong>Eye Color(s)</strong>: {spec.eye_colors}</p>
                            <p><strong>Hair Color(s)</strong>: {spec.hair_colors}</p>
                            <p><strong>Average Height</strong>: {spec.average_height}</p>
                            <p><strong>Average Lifespan</strong>: {spec.average_lifespan}</p>
                            <p><strong>Language(s)</strong>: {spec.language}</p>
                            <p><strong>Classification</strong>: {spec.classification}</p>
                            <p><strong>Designation</strong>: {spec.designation}</p>
                        </div>       
                )
                
            });
            console.log(species);
        }
        return (
            <div className="App">
                    {species}
                    
            </div>
        );
    }
}
export default Species;