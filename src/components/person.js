import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';
import axios from 'axios'

class Person extends Component {
    constructor(props){
        super(props);
        this.state = {
            people: [],
        }
    }

    componentDidMount(){
        let _this = this;
        axios.get('http://swapi.co/api/people')
        .then(function (response) {
            _this.setState({people: response.data.results});
        })
    }
    render(){
        console.log(this.state.people);
        let people;
        if(this.state.people){
            people = this.state.people.map((person) => {
                return(<div className="col-md-12 content">
                            <h3>{person.name}</h3>
                            <p><strong>Gender</strong>: {person.gender}</p>
                            <p><strong>Birth Year</strong>: {person.birth_year}</p>
                            <p><strong>Eye Color</strong>: {person.eye_color}</p>
                            <p><strong>Hair Color</strong>: {person.hair_color}</p>
                            <p><strong>Skin Color</strong>: {person.skin_color}</p>
                        </div>       
                )
                
            });
            console.log(people);
        }
        return (
            <div className="App">
                    {people}
                    
            </div>
        );
    }
}
export default Person;