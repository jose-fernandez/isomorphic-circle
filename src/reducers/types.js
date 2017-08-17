// @flow

export type employeeStateType = {
  loading: boolean,
  error: boolean,
  employees: Array,
  orderBy: string
};

export type peopleStateType = {
  loading: boolean,
  error: boolean,
  people: Array,
  index: number
};

export type menuStateType = {
  MenuVisible: boolean,
  viewportWidth: number | null
};

export type newsStateType = {
  loading: boolean,
  orderBy: string,
  lastFetch: string,
  news: Array
};

export type employeeContainerType = {
  employeeList: employeeStateType
};

export type peopleContainerType = {
  peopleList: peopleStateType
};

export type menuContainerType = {
  menu: menuStateType
};

export type newsContainerType = {
  newsList: newsStateType
};
