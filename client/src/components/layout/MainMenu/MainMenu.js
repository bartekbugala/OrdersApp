import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import { Link, withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainMenu = ({ menuLinks, location }) => {
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
                <Link
                  className={`nav-link ${(location.pathname === link.path &&
                    'active') ||
                    ''}`}
                  to={link.path}>
                  {link.title}
                </Link>
              </NavItem>
            );
          })}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

MainMenu.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
};

export default withRouter(props => <MainMenu {...props} />);
