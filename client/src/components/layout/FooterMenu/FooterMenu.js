import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const FooterMenu = ({ menuLinks, location }) => (
  <ul className="footer-menu">
    {menuLinks.map((link, index) =>
      link.path === '/cart' ? null : (
        <li key={index}>
          <Link
            className={location.pathname === menuLinks.path || ''}
            to={link.path}>
            {link.title}
          </Link>
        </li>
      )
    )}
  </ul>
);

FooterMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
};

export default withRouter(props => <FooterMenu {...props} />);
