import React from 'react';
import EmployeesListItem from '../EmployeesListItem';
import { shallow } from 'enzyme';

jest.unmock('../EmployeesListItem');

describe('Testing EmployeesList Component', () => {
  let employee;
  let index;

  it('Should be visible', () => {
    employee = { description: 'Users', img: 'url/photo.jpg', name: 'paco', position: 'cleaner' };
    index = 1;

    const wrapper = shallow(<EmployeesListItem employee={employee} index={index} />);
    expect(wrapper.find('p').props().children).toBe(employee.description);

    expect(wrapper.find('Label').length).toBe(2);
  });
});
