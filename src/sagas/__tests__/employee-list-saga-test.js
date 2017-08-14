import { call, put, take } from 'redux-saga/effects';
import { requestEmployees, getEmployees, fetchEmployees } from '../employee-list-saga';
import { REQUEST_EMPLOYEES, REQUEST_EMPLOYEES_SUCCESS, REQUEST_EMPLOYEES_FAIL }
  from '../../constants/employee-list-actions-constants';

describe('Testing EmployeesList Saga', () => {
  const requestEmployeesIterator = requestEmployees();
  const getEmployeesIterator = getEmployees();
  const employees = {
    one: {},
    two: [],
  };
  fetch.mockResponse(JSON.stringify({ data: 'mock' }));

  it('The saga will listen to REQUEST_EMPLOYEES action', () => {
    expect(
      requestEmployeesIterator.next().value
    ).toEqual(
      take(REQUEST_EMPLOYEES)
    );
  });

  it('The saga will answer by calling fetchEmployees', () => {
    expect(
      requestEmployeesIterator.next().value
    ).toEqual(
      call(getEmployees)
    );
  });

  it('fetchEmployee will make an API request', () => {
    expect(
      getEmployeesIterator.next().value
    ).toEqual(
      call(fetchEmployees)
    );
  });

  it('the result of the API request will be dispatched again', () => {
    expect(
      getEmployeesIterator.next(employees).value
    ).toEqual(
      put({ type: REQUEST_EMPLOYEES_SUCCESS, employees })
    );
  });

  it('if the API request fails, we dispatch a fail action', () => {
    expect(
      getEmployeesIterator.throw({ message: 'error' }).value
    ).toEqual(
      put({ type: REQUEST_EMPLOYEES_FAIL, message: 'error' })
    );
  });

  it('the fetchEmployees functions triggers a fetch', () => {
    expect(
      fetchEmployees()
    ).toEqual(
      jasmine.any(Promise)
    );
  });

  it('fetchEmployees returns some data', () => {
    fetchEmployees().then((response) => {
      expect(response).toEqual({ data: 'mock' });
    });
  });
});
