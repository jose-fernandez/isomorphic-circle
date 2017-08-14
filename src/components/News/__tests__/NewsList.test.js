import React from 'react';
import TestUtils from 'react-addons-test-utils';

jest.unmock('../NewsList');
jest.unmock('../NewsListItem');


const NewsList = require('../NewsList').default;
import { shallow } from 'enzyme';

// @TODO Rewrite this test using enzyme, is already installed.
// https://github.com/airbnb/enzyme/tree/master/docs

describe('Testing NewsList Component', () => {
  let wrapper;
  let news;
  let renderer;
  let actual;
  let expected;

  xit('Should be visible', () => {
    news = [
      {
        picture: 'http://placehold.it/32x32',
        title: 'aliqua proident non aliquip amet',
        article: 'Ut elit sunt laborum cupidatat incididunt do labore non aute. Ut' +
        'eiusmod sunt anim sit pariatur fugiat incididunt nostrud cillum Lorem sint'
        + ' anim cupidatat incididunt. Officia velit non veniam ea. Ut velit eu ' +
        'Lorem consectetur elit do. Et proident commodo nulla anim do id occaecat.',
        date: 'Saturday, November 14, 2015 11:05 AM',
        index: 0,
        key: 0,
      },
      {
        picture: 'http://placehold.it/32x32',
        title: 'aliqua proident non aliquip amet',
        article: 'Ut elit sunt laborum cupidatat incididunt do labore non aute. Ut' +
        'eiusmod sunt anim sit pariatur fugiat incididunt nostrud cillum Lorem sint'
        + ' anim cupidatat incididunt. Officia velit non veniam ea. Ut velit eu ' +
        'Lorem consectetur elit do. Et proident commodo nulla anim do id occaecat.',
        date: 'Friday, November 13, 2015 11:05 AM',
        index: 1,
        key: 1,
      },
    ];

    renderer = TestUtils.createRenderer();
    renderer.render(<NewsList news={news} />);
    actual = renderer.getRenderOutput().type.displayName;
    expected = 'Panel';
    expect(actual).toBe(expected);
  });

  xit('should show one menu item with the picture url given', () => {
    wrapper = shallow(<NewsList news={news} />);
    expected = 'News';
    expect(wrapper.props().header).toBe(expected);
  });

  xit('should show two news items', () => {
    expect(wrapper.find('NewsListItem').length).toBe(news.length);
  });
});
