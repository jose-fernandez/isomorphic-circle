import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import EmployeesContainer from './components/Employees/EmployeesContainer';
import EmployeeContainer from './components/Employee/EmployeeContainer';
import NewsContainer from './components/News/NewsContainer';
import PeopleContainer from './components/People/PeopleContainer';

export default () => {
  const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={EmployeesContainer} />
      <Route path="Employee/(:id)" component={EmployeeContainer} />
      <Route path="/EmployeesContainer" component={EmployeesContainer} />
      <Route path="/News" component={NewsContainer} />
      <Route path="/People" component={PeopleContainer} />
    </Route>
  );
  return routes;
};
