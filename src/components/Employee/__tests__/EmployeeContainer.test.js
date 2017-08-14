import React from 'react';
import { EmployeeContainer } from '../EmployeeContainer';
import EmployeeActions from '../../../actions/employee-list-actions';
import { shallow } from 'enzyme';

jest.unmock('../EmployeeContainer');
jest.unmock('../EmployeeCard');

describe('Testing EmployeesContainer Component', () => {
  const params = { id: 0 };
  let componentInstance;
  const employeeList = {
    loading: false,
    employees: [
      { description: 'description', img: 'img', name: 'Mark4', position: 'clener' },
      { description: 'description2', img: 'img2', name: 'Mark2', position: 'clener2' },
    ],
    orderBy: 'name',
    lastFetch: '0',
  };

  it('Should be visible', () => {
    componentInstance = shallow(
      <EmployeeContainer
        employeeList={employeeList}
        actions={EmployeeActions}
        params={params}
      />,
      { context: { router: {} } }
    );
    expect(componentInstance).not.toBe(null);

    expect(componentInstance.find('h2').text()).toEqual('Mark4');
  });
});
