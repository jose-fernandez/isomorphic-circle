// @flow
import React, { PropTypes } from 'react';
import PeopleListItem from './PeopleListItem';
import { ComponentOne } from '../styles';

const renderPeopleListItemView = (people: {}, index: number) => (
  <PeopleListItem
    key={index} people={people} index={index}
  />
);


//  destructuring missing anotation
const PeopleList = ({ people }) => {
  const peopleList = people.map((guys, index) => renderPeopleListItemView(guys, index));
  return (<ComponentOne>{peopleList}</ComponentOne>);
};

PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
};

export default PeopleList;
