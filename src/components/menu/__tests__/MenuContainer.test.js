import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { MenuContainer } from '../MenuContainer';
import MenuActions from '../../../actions/menu-actions';

jest.unmock('../MenuContainer');
jest.unmock('../MenuList');
jest.unmock('../MenuItem');

describe('Testing MenuContainer Component', () => {
  let componentInstance;
  const menu = {
    MenuVisible: false,
    viewportWidth: typeof window === 'object' ? window.innerWidth : null,
  };

  it('should be visiblet', () => {
    componentInstance = TestUtils.renderIntoDocument(
      <MenuContainer menu={menu} actions={MenuActions} />
    );
    expect(componentInstance.props.menu.MenuVisible).toBe(false);
    expect(ReactDOM.findDOMNode(componentInstance)).not.toBe(null);
  });
});
