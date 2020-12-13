import React from 'react';


// import PageMain from './Pages/Main';
import PageMap from './Pages/Map';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageMain from './Pages/Main';


function App() {
  return (
    <Router>
      <Route path="/" exact><PageMain /></Route>
      <Route path="/map" exact><PageMap /></Route>
    </Router>
  );
}

export default App;
