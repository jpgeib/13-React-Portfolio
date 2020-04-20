import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import PortfolioHeader from '../../components/PortfolioHeader/PortfolioHeader';
import PhotoshopIcon from '../../components/PhotoshopIcon/PhotoshopIcon';
import PremiereProIcon from '../../components/PremiereProIcon/PremiereProIcon';
import InDesignIcon from '../../components/InDesignIcon/InDesignIcon';
import WordIcon from '../../components/WordIcon/WordIcon';
import PowerPointIcon from '../../components/PowerPointIcon/PowerPointIcon';
import ExcelIcon from '../../components/ExcelIcon/ExcelIcon';
import HTML5Icon from '../../components/HTML5Icon/HTML5Icon';
import CSSIcon from '../../components/CSSIcon/CSSIcon';
import JavaScriptIcon from '../../components/JavaScriptIcon/JavaScriptIcon';
import "./PortfolioContent.css";

class PortfolioContent extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="col-sm-3" id="portfolio-heading">
                        <h1>My Portfolio</h1>
                    </div>
                </div>

                <div className="container" id="portfolio-container">
                    <div className="row">
                        <PortfolioHeader />
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm-4">
                            <PhotoshopIcon />
                        </div>
                        <div className="col-sm-4">
                            <PremiereProIcon />
                        </div>
                        <div className="col-sm-4">
                            <InDesignIcon />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm-4">
                            <WordIcon />
                        </div>
                        <div className="col-sm-4">
                            <PowerPointIcon />
                        </div>
                        <div className="col-sm-4">
                            <ExcelIcon />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm-4">
                            <HTML5Icon />
                        </div>
                        <div className="col-sm-4">
                            <CSSIcon />
                        </div>
                        <div className="col-sm-4">
                            <JavaScriptIcon />
                        </div>
                    </div>

                </div>
            </div>
        );

    }
}

export default PortfolioContent;