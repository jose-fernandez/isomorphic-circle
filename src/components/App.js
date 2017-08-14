// @flow
import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { MenuContainer } from './menu/MenuContainer';
import Header from './Header/Header';

require('../theme/bootstrap-theme.min.scss');
require('../theme/main.scss');

export const App = (x) => {
  console.log('APP.js PROPS --->', x)
	let contentCol :number = menu.MenuVisible ? 9 : 11;
	let menuCol: number = menu.MenuVisible ? 3 : 1;
	const menuSlide: string = 'menu-slide';
	const opened: string = menu.MenuVisible ? 'menu-slide-open' : '';
	const clases: string = `${menuSlide} ${opened}`;
	return (
    <Grid fluid>
      <Row id="wrapper">
        <Header />
        <Col
          sm={menuCol}
          xs={10}
          className={clases}
        >
          <MenuContainer />
        </Col>
        <Col
          smOffset={menuCol}
          sm={contentCol}
          className="content-transition"
        >
          <div>
            {children}
          </div>
        </Col>
      </Row>
    </Grid>
  );
}

// App.propTypes = {
//   menu: PropTypes.object.isRequired,
//   children: PropTypes.node,
//   location: PropTypes.shape({
//     pathname: PropTypes.string
//   }),
//   params: PropTypes.object
// };

// function preload() {
//   return [
//     [sagaName]
//   ];
// }
// App.preload = preload;

// function mapStateToProps(state) {
//   return {
//     errorMessage: state.errorMessage,
//     inputValue: state.router.pathname.substring(1),
//     children: PropTypes.node.isRequired,
//     menu: state.menu,
//   };
// }

App.propTypes = {
	children: PropTypes.node.isRequired,
	menu: PropTypes.object.isRequired,
};

const mapStateToProps = state => (
	{
		menu: state.menu,
	}
);

export default connect(
  mapStateToProps
)(App);

