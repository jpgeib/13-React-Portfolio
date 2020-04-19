import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PortfolioHeader from '../../components/PortfolioHeader/PortfolioHeader';

class PortfolioContent extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <PortfolioHeader />
                </div>
            </div>
        );

    }
}

export default PortfolioContent;