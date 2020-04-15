import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';

import HomeParagraphs from '../../components/HomeParagraphs/HomeParagraphs.js';

class HomeContent extends Component {
    render () {
       return(
        <div className="HomeRender">
           <Navbar/>
           <div className="container">
               
               <HomeParagraphs/>
           </div>
        </div>
       );

    }
}

export default HomeContent;