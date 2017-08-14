// @flow
import React, { Component } from 'react';
import MenuList from './MenuList';
import { Panel, Glyphicon, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MenuActions } from '../../actions/index';
import menuContainerType from './../../reducers/types';

export class MenuContainer extends Component {
  getItems() {
    return (
      [
        { title: 'Employees', url: '/EmployeesContainer', glyph: 'user', key: 0 },
        { title: 'News', url: '/News', glyph: 'globe', key: 1 },
        { title: 'People', url: '/People', glyph: 'star', key: 2 },
        { title: 'Blusers', url: '/News', glyph: 'book', key: 3 },
      ]
    );
  }

  render() {
	  console.log("MENU CONTAINER", this.props);
	  let clases: string = (this.props.menu && this.props.menu.MenuVisible) ?
      'menu-container-open' : 'menu-container';
    let glyphiconShow: string = (this.props.menu && this.props.menu.MenuVisible) ?
      'chevron-left' : 'chevron-right';
    return (
      <Panel
        header={'Menu'}
        bsStyle="info"
        className={clases}
        id="menu_container"
        footer={
          <Button
            className="glyphicon-menu"
            onClick={this.props.actions.toggleMenu}
          >
            <Glyphicon
              glyph={glyphiconShow}
            />
          </Button>
        }
      >
        <MenuList items={this.getItems()} /> visibility={this.props.menu.MenuVisible} />
      </Panel>
    );
  }
}

MenuContainer.propTypes = {
  menu: React.PropTypes.object,
  actions: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state: menuContainerType) => (
  {
    menu: state.menu,
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(MenuActions, dispatch),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
