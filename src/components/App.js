/* eslint-disable indent,react/jsx-indent,react/jsx-indent-props */
// @flow
import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import MenuContainer from './menu/MenuContainer';
import Header from './Header/Header';

require('../theme/bootstrap-theme.min.scss');
require('../theme/circleMain.scss');

const App = ({ children, menu }) => {
	// noinspection JSAnnotator
	let contentCol :number = (menu && menu.MenuVisible) ? 9 : 11;
	// noinspection JSAnnotator
	let menuCol: number = (menu && menu.MenuVisible) ? 3 : 1;
	// noinspection JSAnnotator
	const menuSlide: string = 'menu-slide';
	// noinspection JSAnnotator
	const opened: string = (menu && menu.MenuVisible) ? 'menu-slide-open' : '';
	// noinspection JSAnnotator
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
};

App.propTypes = {
	children: PropTypes.node,
	menu: PropTypes.object,
};

const mapStateToProps = state => (
	{
		menu: state.menu,
	}
);

export default connect(
	mapStateToProps
)(App);
