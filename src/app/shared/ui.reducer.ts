import * as fromUI from './ui.actions';
import { DiplaySideBar } from './ui.types';

export interface State {
  isLoading: boolean;
  isOpenSideBar?: DiplaySideBar;
}

const initState: State = {
  isLoading: false,
  isOpenSideBar: 'block'
};

export function uiReducer(state = initState, action: fromUI.acciones): State {
  switch (action.type) {
    case fromUI.ACTIVAR_LOADING:
      return {
        isLoading: true
      };
    case fromUI.DESACTIVAR_LOADING:
      return {
        isLoading: false
      };
    case fromUI.ACTIVAR_SIDEBAR:
      return {
        ...state,
        isOpenSideBar: 'block'
      };
    case fromUI.DESACTIVAR_SIDEBAR:
      return {
        ...state,
        isOpenSideBar: 'none'
      };
    default:
      return state;
  }
}
