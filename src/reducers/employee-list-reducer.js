// @flow
import { REQUEST_EMPLOYEES, REQUEST_EMPLOYEES_SUCCESS, REQUEST_EMPLOYEES_FAIL }
  from '../constants/employee-list-actions-constants';
import { employeeStateType } from './types';

const initialState: employeeStateType = {
  loading: false,
  error: false,
  employees: [],
  orderBy: 'name',
};

export default function employeeList(
  state: employeeStateType = initialState,
  action: Object = {}): employeeStateType {
  switch (action.type) {
    case REQUEST_EMPLOYEES:
      return { ...state, loading: true };
    case REQUEST_EMPLOYEES_SUCCESS:
      return { ...state, employees: action.employees, loading: false };
    case REQUEST_EMPLOYEES_FAIL:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}
