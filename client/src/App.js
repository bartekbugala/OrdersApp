import React from 'react';

import { Switch, Route } from 'react-router-dom';

// routes
import HomePage from './components/pages/HomePage/HomePage';
import CurrentProductionsPage from './components/pages/CurrentProductionsPage/CurrentProductionsPage';
import FinishedProductionsPage from './components/pages/FinishedProductionsPage/FinishedProductionsPage';
import MainLayout from './components/layout/MainLayout/MainLayout';

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/current" exact component={CurrentProductionsPage} />
          <Route path="/finished" exact component={FinishedProductionsPage} />
          {/* <Route path="/products/:id" exact component={SingleProduct} */} />
          <Route path="/home" exact component={HomePage} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
