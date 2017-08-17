// @flow
import React, { Component } from 'react';
import { Row, Grid, Button, Glyphicon, Image } from 'react-bootstrap';
import EmployeeCard from './EmployeeCard';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EmployeeListActions } from '../../actions/index';
import type { employeeContainerType } from './../../reducers/types';

class EmployeeContainer extends Component {
  componentDidMount() {
    this.props.actions.requestEmployees();
  }

  render() {
    const resultString: number = this.props.params.id.length > 1
      ? this.props.params.id.replace(/^[0]+/g, '')
      : this.props.params.id;

    const isIdValid: boolean = this.props.employeeList.employees.length > resultString;

    const imgSrc: string = isIdValid
      ? this.props.employeeList.employees[resultString].img
      : '../../images/images.png';

    const name: string | null = isIdValid
      ? this.props.employeeList.employees[resultString].name
      : null;

    const position: number | null = isIdValid
      ? this.props.employeeList.employees[resultString].position
      : null;

    const description: string | null = isIdValid
      ? this.props.employeeList.employees[resultString].description
      : null;

    if (!isIdValid && this.props.employeeList.lastFetch !== '0'
       && this.props.employeeList.lastFetch !== null) {
      this.context.router.push('/EmployeesContainer');
    }

    return (
      <Grid>
        <Row style={{ margin: '0 0 1em 0' }}>
          <Link to="/EmployeesContainer"><Button><Glyphicon glyph={"menu-left"} /></Button></Link>
        </Row>
        <Row style={{ textAlign: 'center' }}>
          <Image
            width={300}
            height={300}
            src={imgSrc}
            thumbnail
          />
        </Row>
        <Row>
          <h2>{name}</h2>
          <EmployeeCard
            title="position"
            info={position}
          />
          <EmployeeCard
            title="Description"
            info={description}
          />
        </Row>
      </Grid>
  );
  }
}

EmployeeContainer.propTypes = {
  employeeList: React.PropTypes.object.isRequired,
  params: React.PropTypes.object,
  actions: React.PropTypes.object.isRequired,
};

EmployeeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state: employeeContainerType) => (
  {
    employeeList: state.employeeList,
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(EmployeeListActions, dispatch),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeContainer);
