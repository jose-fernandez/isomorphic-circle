import React from 'react';
import { Glyphicon, Navbar } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MenuActions } from '../../actions/index';


const Header = ({ actions }) => (
  <Navbar fixedTop >
    <Navbar.Header>
      <Navbar.Brand className="brand-header">
        <Glyphicon
          glyph="align-justify"
          onClick={actions.toggleMenu}
        />
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);

Header.propTypes = {
  actions: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    menu: state.menu,
  };
}

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(MenuActions, dispatch),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
