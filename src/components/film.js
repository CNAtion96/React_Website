import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';
import axios from 'axios';

class Film extends Component {

    constructor(props) {
        super(props);

        this.state = {
            films: [],
        }
    }

    componentWillMount(){
        let _this = this;
        axios.get('http://swapi.co/api/films')
        .then((response)=> {
            _this.setState({films: response.data.results});
            console.log(this.state);

    });
    }

    render(){
        console.log(this.state.films);
        let episodes;
        if(this.state.films){
            episodes = this.state.films.map((episode) => {
                return(<div className="col-md-12 content">
                            <h3>Episode {episode.episode_id}: {episode.title}</h3>
                            <p><strong>Director</strong>: {episode.director}</p>
                            <p><strong>Produce(s)</strong>: {episode.producer}</p>
                        </div>       
                )
                
            });
            console.log(episodes);
        }

        return (
            <div className="App">
                        {episodes}
            </div>
        );
    }
}
export default Film;