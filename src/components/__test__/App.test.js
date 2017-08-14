import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';

describe('Test App Component', () => {
  it('should show content', () => {
    const store = {
      getState() {
        return {};
      },
      subscribe() {
        return {};
      },
      dispatch() {
        return {};
      },
    };
    const menu = { MenuVisible: false };
    const children = React.createElement('<div />');
    const componentInstance = shallow(
      <App children={children} menu={menu} />,
      {
        context: { store },
      }
    );
    expect(componentInstance.length).toBe(1);
  });
});
