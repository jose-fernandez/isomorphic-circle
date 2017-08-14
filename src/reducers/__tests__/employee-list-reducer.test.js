import employeeList from '../employee-list-reducer';
import { REQUEST_EMPLOYEES, REQUEST_EMPLOYEES_SUCCESS, REQUEST_EMPLOYEES_FAIL }
  from '../../constants/employee-list-actions-constants';

jest.unmock('../employee-list-reducer');

describe('Testing EmployeesList Reducer', () => {
  const state = {
    loading: false,
    error: false,
    employees: [],
    orderBy: 'name',
  };

  const requestAction = {
    type: REQUEST_EMPLOYEES,
  };

  const requestSuccessAction = {
    type: REQUEST_EMPLOYEES_SUCCESS,
    employees: [{ test: 'test' }],
  };

  const requestFailAction = {
    type: REQUEST_EMPLOYEES_FAIL,
  };

  it('An unknown action returns the state', () => {
    const returnedObject = employeeList(state, { type: 'UNKNOWN_ACTION' });
    expect(returnedObject).toEqual(state);
  });

  it('Loading should be false by default', () => {
    const returnedObject = employeeList();
    expect(returnedObject.loading).toBe(false);
  });

  it('Loading should be true when firing a request', () => {
    const returnedObject = employeeList(state, requestAction);
    expect(returnedObject.loading).toBe(true);
  });

  it('Loading should be false after the request is done', () => {
    const returnedObject = employeeList(state, requestSuccessAction);
    expect(returnedObject.loading).toBe(false);
  });

  it('Employees should be expected', () => {
    const returnedObject = employeeList(state, requestSuccessAction);
    expect(returnedObject.employees).toEqual(requestSuccessAction.employees);
  });

  it('Returned object type should be correct', () => {
    const returnedObject = employeeList(state, requestSuccessAction);
    expect(returnedObject.orderBy).toEqual(jasmine.any(String));
    expect(returnedObject.loading).toEqual(jasmine.any(Boolean));
    expect(returnedObject.employees).toEqual(jasmine.any(Array));
  });

  it('A failed request will set an error in the state', () => {
    const returnedObject = employeeList(state, requestFailAction);
    expect(returnedObject.error).toEqual(true);
  });
});
