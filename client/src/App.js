import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/private-route/PrivateRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// routes
import HomePage from './components/pages/HomePage/HomePage';
import AllProductionsPage from './components/pages/AllProductionsPage/AllProductionsPage';
import CurrentProductionsPage from './components/pages/CurrentProductionsPage/CurrentProductionsPage';
import CanceledProductionsPage from './components/pages/CanceledProductionsPage/CanceledProductionsPage';
import FinishedProductionsPage from './components/pages/FinishedProductionsPage/FinishedProductionsPage';
import MainLayout from './components/layout/MainLayout/MainLayout';
import TransportedProductionsPage from './components/pages/TransportedProductionsPage/TransportedProductionsPage';

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={CurrentProductionsPage} />
          <PrivateRoute path="/all" exact component={AllProductionsPage} />
          <Route path="/current" exact component={CurrentProductionsPage} />
          <Route path="/finished" exact component={FinishedProductionsPage} />
          <Route path="/canceled" exact component={CanceledProductionsPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route
            path="/transported"
            exact
            component={TransportedProductionsPage}
          />
          {/* <Route path="/products/:id" exact component={SingleProduct} */} />
          <Route path="/home" exact component={CurrentProductionsPage} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
