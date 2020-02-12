import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logoutUser } from '../../../redux/thunks/auth.thunks';
import store from '../../../redux/store';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainMenu = ({ menuLinks, location, auth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="container-fluid container" light expand="lg">
      <NavbarBrand href="/">
        <Logo />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {menuLinks.map((link, index) => {
            return (
              <NavItem key={index}>
                {auth.isAuthenticated && link.title === 'Login' ? (
                  <Link
                    className={`nav-link`}
                    to={'/'}
                    onClick={() => {
                      // Logout user
                      store.dispatch(logoutUser());
                      // Redirect to login
                      window.location.href = './login';
                    }}>
                    Logout
                  </Link>
                ) : (
                  <Link
                    className={`nav-link ${(location.pathname === link.path &&
                      'active') ||
                      ''}`}
                    to={link.path}>
                    {link.title}
                  </Link>
                )}
                {/*                 <Link
                  className={`nav-link ${(location.pathname === link.path &&
                    'active') ||
                    ''}`}
                  to={link.path}>
                  {link.title}
                </Link> */}
              </NavItem>
            );
          })}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

MainMenu.propTypes = {
  auth: PropTypes.object.isRequired,
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(
  withRouter(props => <MainMenu {...props} />)
);
