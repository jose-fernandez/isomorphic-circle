import React from 'react';
import Header from '../Header';
import { mount } from 'enzyme';

jest.unmock('../Header');

describe('Testing Header Component', () => {
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
  it('Should be visible', () => {
    const headerActions = {};
    const componentInstance = mount(
      <Header actions={headerActions} />,
      { context: { store } }
    );
    expect(componentInstance.length).toBe(1);
  });
});
