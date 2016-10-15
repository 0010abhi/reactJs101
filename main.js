import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import navigation from './src/navigationBar.jsx';
import home from './src/home.jsx';
import Level1 from './src/level1.jsx';
import Level2 from './src/level2.jsx';
import Level3 from './src/level3.jsx';
import Level4 from './src/level4.jsx';
import DemoApp from './src/demoApp.jsx';

ReactDOM.render((
   <Router history = {browserHistory}>
        <Route path = "/" component = {navigation}>
          <IndexRoute component={home} />
          <Route path = "level1" component = {Level1} />
          <Route path = "level2" component = {Level2} />
          <Route path = "level3" component = {Level3} />
          <Route path = "level4" component = {Level4} />
          <Route path = "demoApp" component = {DemoApp} />
        </Route>
   </Router>
), document.getElementById('reactDemoApp'));

// setTimeout(() => {
//    ReactDOM.unmountComponentAtNode(document.getElementById('reactDemoApp'));}, 10000);
