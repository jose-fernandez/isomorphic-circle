// @flow
import React, { PropTypes } from 'react';
import { ListGroup, Panel } from 'react-bootstrap';
import EmployeesListItem from './EmployeesListItem';

const renderEmployeesListItemView = (employee: {}, index: number) => (
  <EmployeesListItem
    key={index} employee={employee} index={index}
  />
);

const mapEmployeesListItem = (employees: Array<{}>) => (
  employees.map((employee, index) => renderEmployeesListItemView(employee, index))
);

//  destructuring missing anotation
const EmployeesList = ({ employees }) => {
  const employeesList: Array<{}> = mapEmployeesListItem(employees);
  return (
    <Panel
      className="mainPanel"
      header="Employees"
      footer={`Total number of employees: ${employees.length}`}
      bsStyle="info"
    >
      <ListGroup>
        {employeesList}
      </ListGroup>
    </Panel>
  );
};

EmployeesList.propTypes = {
  employees: PropTypes.array.isRequired,
};


export default EmployeesList;
