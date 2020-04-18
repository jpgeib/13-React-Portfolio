import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';

import HomeParagraphs from '../../components/HomeParagraphs/HomeParagraphs.js';
import Portrait from '../../components/Portrait/Portrait';
import './HomeContent.css';

class HomeContent extends Component {
    render() {
        return (
            <div className="HomeRender">
                <Navbar />
                <div className="container">
                    <div className="col-sm-3" id="home-heading">
                        <h1>About Me</h1>
                    </div>
                </div>

                <div className="container" id="content-container">
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <Portrait />
                        </div>
                        <div className="col-sm-8 col-xs-12" id="paragraph-container">
                            <HomeParagraphs />
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default HomeContent;