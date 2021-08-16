import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const players = (props) => {
    const {name, image, salary, position} = props.player;
    return (
        <div className="players">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="players-info">
                <h3>{name}</h3>
                <p>Play as a {position}</p>
                <p>Salary: {salary}</p>
                <Button variant="success" onClick={()=>props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faFutbol} />Add Player</Button>
            </div>            
        </div>
    );
};

export default players;