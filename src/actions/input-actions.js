/* eslint-disable flowtype/no-types-missing-file-annotation */
// @fow
// import { REQUEST_INPUT }
//   from '../constants/people-list-actions-constants';

function requestName(formValue): { type: string } {
  return { type: 'REQUEST_INPUT', payload: formValue };
}

const InputActions: Object = {
  requestName,
};

export default InputActions;
