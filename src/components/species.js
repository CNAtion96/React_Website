import React, { Component } from 'react';
import {Link} from 'react-router';
import '../App.css';

class Species extends Component {

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
                             <p>Species</p>
                        </div></div>
                    
            </div>
        );
    }
}
export default Species;