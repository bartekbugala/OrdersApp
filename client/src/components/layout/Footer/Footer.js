import React from 'react';
//import { connect } from 'react-redux';
//import { getMenuLinks } from '../../../redux/shopRedux';
import FooterMenu from '../../layout/FooterMenu/FooterMenu';

const Footer = props => {
  const { menuLinks } = props;
  return (
    <footer>
      <div className="container footer">
        <div className="footer-copyright">{'All rights reserved'}</div>
        <nav className="footer-nav"></nav>
      </div>
    </footer>
  );
};

export default Footer;
