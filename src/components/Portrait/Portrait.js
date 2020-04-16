import React from 'react';
import portrait from '../../Images'
import 'Portrait.css';

const Portrait = props => {
    return (
        <div className="portrait-place">
            <img className="img-fluid" id ="portrait" src={portrait}/>
        </div>
    );
}

export default Portrait;