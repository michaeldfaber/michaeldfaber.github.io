import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Home } from './Pages/Home';
import { Resume } from './Pages/Resume';
import { Playground } from './Pages/Playground';
import { Articles } from './Pages/Articles';

import { GoogleCharts } from './Pages/Articles/GoogleCharts';
import { JQueryReact } from './Pages/Articles/JQueryReact';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/playground' component={Playground} />
          <Route exact path='/articles' component={Articles} />

          <Route exact path='/google-charts' component={GoogleCharts} />
          <Route exact path='/jquery-react' component={JQueryReact} />
        </Switch>
      </div>
    </Router>
  );
}
