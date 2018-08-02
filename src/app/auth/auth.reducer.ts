import * as fromAuth from './auth.actions';
import { User } from './models/user.model';

export interface AuthState {
  user: User;
  // autenticado: boolean;
  // emailConfirmado: boolean;
}

const initState: AuthState = {
  user: null,
  // autenticado: false,
  // emailConfirmado: false,
};

export function authReducer(state = initState, action: fromAuth.acciones): AuthState {

  switch (action.type) {
    case fromAuth.SET_USER:
      return {
        user: {
          ... action.user
        }
      };
      case fromAuth.UNSET_USER:
      return {
        user: null
      };

    default:
      return state;
  }
}