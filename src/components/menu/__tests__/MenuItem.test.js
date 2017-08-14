import React from 'react';
import MenuItem from '../MenuItem';
import { shallow } from 'enzyme';

jest.unmock('../MenuItem');

describe('Testing MenuItem Component', () => {
  let key = 1;
  let item = { title: 'Blusers', url: 'www.whatweater.com', glyph: 'star' };
  let visibility = true;

  it('should show one menu item with the url given', () => {
    const wrapper = shallow(<MenuItem index={key} item={item} visibility={visibility} />);
    expect(wrapper.props().to).toBe(item.url);
  });
});
