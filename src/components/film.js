import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';

class Film extends Component {

    render(){
        let episodes;
        if(this.props.films){
            episodes = this.props.films.data.results.map((episode) => {
                return(<div className="col-md-12 content">
                            <p>Films</p>
                            <h3>Episode {episode.episode_id}: {episode.title}</h3>
                            <p>Director: {episode.director}</p>
                            <p>Produce(s): {episode.producer}</p>
                        </div>
                        
                )
            });
        }

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
                        {episodes}
                        </div>
                    
            </div>
        );
    }
}
export default Film;