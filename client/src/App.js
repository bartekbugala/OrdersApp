import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/private-route/PrivateRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// routes
//import HomePage from './components/pages/HomePage/HomePage';
import CurrentProductionsPage from './components/pages/CurrentProductionsPage/CurrentProductionsPage';
import FinishedProductionsPage from './components/pages/FinishedProductionsPage/FinishedProductionsPage';
import TransportedProductionsPage from './components/pages/TransportedProductionsPage/TransportedProductionsPage';
import CanceledProductionsPage from './components/pages/CanceledProductionsPage/CanceledProductionsPage';
import AllProductionsPage from './components/pages/AllProductionsPage/AllProductionsPage';
import StatsPage from './components/pages/StatsPage/StatsPage';
import MainLayout from './components/layout/MainLayout/MainLayout';
class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={CurrentProductionsPage} />
          <Route path="/current" exact component={CurrentProductionsPage} />
          <Route path="/finished" exact component={FinishedProductionsPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route
            path="/transported"
            exact
            component={TransportedProductionsPage}
          />
          <Route path="/canceled" exact component={CanceledProductionsPage} />
          <PrivateRoute path="/all" exact component={AllProductionsPage} />
          <Route path="/stats" exact component={StatsPage} />
          {/* <Route path="/products/:id" exact component={SingleProduct} */} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
