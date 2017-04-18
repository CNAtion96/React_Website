import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory, Link} from 'react-router';
import './App.css';

class Home extends Component {

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
                             {this.props.children}
                        </div>
                    </div>
                    
            </div>
        );
    }
}

export default Home