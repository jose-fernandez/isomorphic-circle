// @flow
import React, { Component } from 'react';
import EmployeesList from './EmployeesList';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { EmployeeListActions } from '../../actions/index';
import { bindActionCreators } from 'redux';
import employeeContainerType from './../../reducers/types';

export class EmployeesContainer extends Component {

  componentDidMount() {
    this.props.actions.requestEmployees();
  }
  render() {
    return (
      <Row >
        <EmployeesList
          employees={this.props.employeeList.employees}
        />
      </Row>
    );
  }

}
EmployeesContainer.propTypes = {
  employeeList: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state: employeeContainerType) => ({ employeeList: state.employeeList });

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(EmployeeListActions, dispatch) }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesContainer);
