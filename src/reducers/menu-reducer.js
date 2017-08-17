// @flow
import { TOGGLE_MENU } from '../constants/menu-actions-constants';
import { menuStateType } from './types';

// noinspection JSAnnotator
const initialState: menuStateType = {
  MenuVisible: false,
  viewportWidth: typeof window === 'object' ? window.innerWidth : null,
};

// noinspection JSAnnotator
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
