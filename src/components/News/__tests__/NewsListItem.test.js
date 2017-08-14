import React from 'react';
import NewsListItem from '../NewsListItem';

jest.unmock('../NewsListItem');

import { shallow } from 'enzyme';

describe('Testing MenuItem Component', () => {
  let index = 1;
  let article = { picture: 'http://placehold.it/32x32',
   title: 'aliqua proident non aliquip amet',
  article: 'Ut elit sunt laborum cupidatat incididunt do labore non aute. Ut' +
  'eiusmod sunt anim sit pariatur fugiat incididunt nostrud cillum Lorem sint'
  + ' anim cupidatat incididunt. Officia velit non veniam ea. Ut velit eu ' +
  'Lorem consectetur elit do. Et proident commodo nulla anim do id occaecat.',
  date: 'Saturday, November 14, 2015 11:05 AM',
  index: 0,
};

  xit('should show one NewsListItem with the picture url given', () => {
    const wrapper = shallow(<NewsListItem article={article} index={index} />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('img').node.props.src).toBe(article.picture);
  });

  it('should show one NewsListItem with the picture url given', () => {
    const wrapper = shallow(<NewsListItem article={article} index={index} />);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').node.props.children).toBe(article.article);
  });
});
