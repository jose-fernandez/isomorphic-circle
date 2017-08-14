import React from 'react';
import { EmployeesContainer } from '../EmployeesContainer';
import EmployeesActions from '../../../actions/employee-list-actions';
import TestUtils from 'react-addons-test-utils';

jest.unmock('../EmployeesContainer');
jest.unmock('../EmployeesList');
jest.unmock('../EmployeesListItem');
jest.mock('fetchEmployees');

describe('Testing EmployeesContainer Component', () => {
  let componentInstance;
  const employeeList = {
    loading: false,
    employees: [],
    orderBy: 'name',
    lastFetch: '0',
  };
  employeeList.employees = [
    { description: 'description', img: 'img', name: 'Mark4', position: 'clener' },
    { description: 'description2', img: 'img2', name: 'Mark2', position: 'clener2' },
  ];

  it('Should be visible', () => {
    componentInstance = TestUtils.renderIntoDocument(<EmployeesContainer
      employeeList={employeeList} actions={EmployeesActions}
    />);
    expect(componentInstance).not.toBe(null);
  });

  it('Testing Sort function', () => {
    const returnedEmployees = componentInstance.sort(employeeList.employees);
    expect(returnedEmployees[0].name).toEqual('Mark2');
  });
});
