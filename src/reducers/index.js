// @flow
import { combineReducers } from 'redux';
import menu from './menu-reducer';
import employeeList from './employee-list-reducer';
import newsList from './news-list-reducer';
import peopleList from './people-list-reducer';

const rootReducer: Function = combineReducers({
  menu,
  employeeList,
  newsList,
  peopleList,
});

export default rootReducer;
