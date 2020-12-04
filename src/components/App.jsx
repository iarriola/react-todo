import React from "react";
import {Route, Switch} from 'react-router-dom';
import DashboardPage from './dashboard/DashboardPage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import NotFoundPage from './NotFoundPage';
import TasksPage from './tasks/TasksPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/app" component={DashboardPage} />
        <Route path="/tasks" component={TasksPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
