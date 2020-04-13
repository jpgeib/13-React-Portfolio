import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

function App() {
   return (
<Router>
   <Navbar/>
   <Route exact path="/"/>
</Router>
);
}

export default App;
