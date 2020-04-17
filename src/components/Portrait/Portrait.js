import React from 'react';
import './Portrait.css';

const Portrait = props => {
    return (
        <div className="portrait-place">
            <img className="img-fluid" id ="portrait" alt="Portrait" src={require('../../Images/Portfolio_Portrait.jpeg')}/>
        </div>
    );
}

export default Portrait;