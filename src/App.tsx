import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Home } from './Pages/Home';
import { GoogleCharts } from './Pages/GoogleCharts';
import { JQueryReact } from './Pages/JQueryReact';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/google-charts' component={GoogleCharts} />
          <Route exact path='/jquery-react' component={JQueryReact} />
        </Switch>
      </div>
    </Router>
  );
}
