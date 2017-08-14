// @flow
import { REQUEST_PEOPLE, REQUEST_INPUT, RESET }
  from '../constants/people-list-actions-constants';

function requestPeople(): { type: string } {
  return { type: 'REQUEST_PEOPLE' };
}

function requestName(formValue = '', index = 0) {
  return {
    type: 'REQUEST_INPUT',
    payload: {
      value: formValue,
      index,
    },
  };
}

function reset(): { type: string } {
  return { type: 'RESET' };
}

// noinspection JSAnnotator
const PeopleListActions: Object = {
  requestPeople,
  requestName,
  reset,
};

export default PeopleListActions;
