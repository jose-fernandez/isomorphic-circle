// @flow
import { REQUEST_EMPLOYEES }
  from '../constants/employee-list-actions-constants';

function requestEmployees(): { type: string } {
  return { type: 'REQUEST_EMPLOYEES' };
}

const EmployeeListActions: Object = {
  requestEmployees,
};

export default EmployeeListActions;
