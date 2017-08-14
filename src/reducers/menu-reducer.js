// @flow
import { TOGGLE_MENU } from '../constants/menu-actions-constants';
import type { menuStateType } from './types';

const initialState: menuStateType = {
  MenuVisible: false,
  viewportWidth: typeof window === 'object' ? window.innerWidth : null,
};
console.log("MENU REDUCER", initialState);

export default function menu(
  state: menuStateType = initialState,
  action: Object = {}): menuStateType {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state,
        MenuVisible: ! state.MenuVisible,
        viewportWidth: typeof window === 'object' ? window.innerWidth : null,
      };

    default:
      return state;
  }
}
