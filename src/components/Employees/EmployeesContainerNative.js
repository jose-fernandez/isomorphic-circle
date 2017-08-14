import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/native';
import renderSeparator from './ListSeparator';
import EmployeesItemNative from './EmployeesItemNative';
import { EmployeeListActions } from '../../actions/index';
import TitleHeader from '../ReactNativeComponents/TitleHeader';

const ListFooter = styled.View`
  background-color: #d7d7d7;
  padding-top: 10;
  padding-bottom: 10;
  margin-top: 20;
  border-top-width: 0.5;
  border-top-color: lightgrey;
`;
const ListFooterText = styled.Text`
  marginLeft: 10;
`;
const Container = styled.View`
  height: 90%;
  top: 63;
  padding-top: 10;
  border-radius: 5;
  border-left-width: 1;
  border-right-width: 1;
  border-bottom-width: 1;
  border-color: lightblue;
`;
const FlatListEmployees = styled.FlatList`
  align-content: center;
`;


class EmployeesContainerNative extends Component {

  componentDidMount() {
    this.props.actions.requestEmployees();
  }
  listFooter = () => (
    <ListFooter>
      <ListFooterText>
        Total number of employees: {this.props.employeeList.employees.length}
      </ListFooterText>
    </ListFooter>
  );
  titleHeader = () => (
    <TitleHeader title="Employees" />
  );
  render() {
    return (
      <Container>
        <FlatListEmployees
          data={this.props.employeeList.employees}
          renderItem={EmployeesItemNative}
          ListHeaderComponent={this.titleHeader}
          ListFooterComponent={this.listFooter}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={renderSeparator}
        />
      </Container>
    );
  }

}

EmployeesContainerNative.propTypes = {
  employeeList: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ employeeList: state.employeeList });

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(EmployeeListActions, dispatch) }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesContainerNative);

