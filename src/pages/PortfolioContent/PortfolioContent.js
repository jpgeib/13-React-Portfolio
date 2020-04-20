import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import PortfolioHeader from '../../components/PortfolioHeader/PortfolioHeader';
import PhotoshopIcon from '../../components/PhotoshopIcon/PhotoshopIcon';
import "./PortfolioContent.css";
import PremiereProIcon from '../../components/PremiereProIcon/PremiereProIcon';

class PortfolioContent extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container" id="content-container">
                    <div className="row">
                        <PortfolioHeader />
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <PhotoshopIcon />
                        </div>
                        <div className="col-sm-4">
                            <PremiereProIcon />
                        </div>
                    </div>
                    
                </div>
            </div>
        );

    }
}

export default PortfolioContent;