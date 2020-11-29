import React from "react";
import {Route, Switch} from 'react-router-dom';
import './App.css';

import DashboardPage from './dashboard/DashboardPage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import NotFoundPage from './NotFoundPage';
import TaskApi from './containers/TaskApi';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/app" component={DashboardPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <TaskApi />
    </div>
  );

}

export default App;
