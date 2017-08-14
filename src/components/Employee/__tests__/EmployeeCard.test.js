import React from 'react';
import TestUtils from 'react-addons-test-utils';
import EmployeeCard from '../EmployeeCard';

jest.unmock('../EmployeeCard');

describe('Test EmployeeCard Component', () => {
  let info = 'hello';

  it('should show content', () => {
    const componentInstance = TestUtils.createRenderer();
    componentInstance.render(<EmployeeCard title="Position" info={info} />);
    const output = componentInstance.getRenderOutput();
    expect(output.props.header).toBe('Position');
    expect(output.props.children.props.children).toBe(info);
  });
});
