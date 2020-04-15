import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContent from './containers/HomeContent/HomeContent';
import ContactContent from './containers/ContactContent/ContactContent';
import PortfolioContent from './containers/PortfolioContent/PortfolioContent';

function App() {
   return (
<Router>
   <Route exact path="/" component={HomeContent}/>
   <Route exact path="/contact" component={ContactContent}/>
   <Route exact path="/portfolio" component={PortfolioContent}/>
</Router>
);
}

export default App;
