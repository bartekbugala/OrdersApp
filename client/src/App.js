import React from 'react';

import { Switch, Route } from 'react-router-dom';

// routes
import HomePage from './components/pages/HomePage/HomePage';
import MainLayout from './components/layout/MainLayout/MainLayout';

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/products/:id" exact component={SingleProduct} */} />
          <Route path="/home" exact component={HomePage} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
