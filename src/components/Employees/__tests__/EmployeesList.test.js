import React from 'react';
import TestUtils from 'react-addons-test-utils';
import EmployeesList from '../EmployeesList';

jest.unmock('../EmployeesList');
jest.unmock('../EmployeesListItem');

// @TODO Rewrite this test using enzyme, is already installed.
// https://github.com/airbnb/enzyme/tree/master/docs

describe('Testing EmployeesList Component', () => {
  let employees;
  let renderer;
  let actual;
  let expected;
  let onEmployeeClick = () => {};
  let output;

  xit('Should be visible', () => {
    employees = [
      { description: 'Users', img: 'url/photo.jpg', name: 'paco', position: 'cleaner' },
      { description: 'Users2', img: 'url/photo2.jpg', name: 'pepe', position: 'cleaner' },
    ];

    renderer = TestUtils.createRenderer();
    renderer.render(<EmployeesList employees={employees} onEmployeeClick={onEmployeeClick} />);
    output = renderer.getRenderOutput();
    actual = renderer.getRenderOutput().type.displayName;
    expected = 'Panel';
    expect(actual).toBe(expected);
  });

  xit('props.employees.length should be 2', () => {
    expected = 'Total number of employees: 2';
    expect(output.props.footer).toBe(expected);
  });

  xit('The first Employee name listed should be paco', () => {
    expected = employees[0].name;
    expect(output.props.children.props.children[0].props.employee.name).toBe(expected);
  });
});
