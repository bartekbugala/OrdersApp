import React from 'react';
import MainMenu from '../../layout/MainMenu/MainMenu';
import { connect } from 'react-redux';
import { getMenuLinks } from '../../../redux/selectors';

const mapStateToProps = state => ({
  menuLinks: getMenuLinks(state)
});

const Header = props => {
  const { menuLinks } = props;
  return (
    <header>
      <nav className="header-nav">
        <MainMenu menuLinks={menuLinks} />
      </nav>
    </header>
  );
};

export default connect(mapStateToProps)(Header);
