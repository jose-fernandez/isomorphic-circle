import menu from '../menu-reducer';
import { TOGGLE_MENU } from '../../constants/menu-actions-constants';

jest.unmock('../menu-reducer');

describe('Testing Menu Reducer', () => {
  const state = [{
    MenuVisible: false,
    viewportWidth: 150,
  }];

  const toggleMenuAction = {
    type: TOGGLE_MENU,
  };

  it('An unknown action returns the state', () => {
    const returnedObject = menu(state, { type: 'UNKNOWN_ACTION' });
    expect(returnedObject).toEqual(state);
  });

  it('By default the menu is not visible', () => {
    const returnedObject = menu();
    expect(returnedObject.MenuVisible).toEqual(false);
  });

  it('MenuVisible should be oposite and ViewPort 1024', () => {
    // 1024 is the default size that jest assign to window.innerWidth
    const returnedObject = menu(state, toggleMenuAction);
    expect(returnedObject.MenuVisible).toBe(true);
    expect(returnedObject.viewportWidth).toBe(1024);
  });

  it('Returned object type should be correct', () => {
    const returnedObject = menu(state, toggleMenuAction);
    expect(returnedObject.MenuVisible).toEqual(jasmine.any(Boolean));
    expect(returnedObject.viewportWidth).toEqual(jasmine.any(Number));
  });
});
