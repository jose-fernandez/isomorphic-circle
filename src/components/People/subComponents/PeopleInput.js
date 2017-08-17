// @flow
import React, { PropTypes } from 'react';
import { ComponentTwo } from '../styles';
import InputListItem from './InputListItem';

const PeopleInput = ({ event, people, index }) =>
  <ComponentTwo>
    <img
      style={{ height: '50%', width: '100%' }}
      src="./images/cube.gif" alt="loader"
    />
    <InputListItem
      people={people}
      event={event}
      index={index}
    />
  </ComponentTwo>
;

PeopleInput.propTypes = {
  event: PropTypes.func.isRequired,
  people: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export default PeopleInput;
