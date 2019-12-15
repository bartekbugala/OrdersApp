import React from 'react';
import Login from '../Login/Login';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'admin'
    };
  }
  render() {
    const { children } = this.props;
    const { user } = this.state;
    if (user !== 'admin' && user !== 'manager' && user !== 'csa')
      return <Login />;
    else return <div>{children}</div>;
  }
}

export default Auth;
