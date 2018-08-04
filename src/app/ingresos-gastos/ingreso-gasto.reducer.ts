import * as fromIngresoGasto from './ingreso-gasto.action';
import { IngresoGasto } from './models/ingreso-gasto.model';
import { AppState } from '../app.reducer';

export interface IngresoGastoState {
  items: IngresoGasto[];
}

export interface AppState extends AppState {
  ingresoGasto: IngresoGastoState;
}

const initState: IngresoGastoState = {
  items: []
};

export function ingresoGastoReducer(
  state = initState,
  action: fromIngresoGasto.acciones
): IngresoGastoState {
  switch (action.type) {
    case fromIngresoGasto.SET_ITEMS:
      return {
        items: [
          ...action.items.map(item => {
            return {
              ...item
            };
          })
        ]
      };

    case fromIngresoGasto.UNSET_ITEMS:
      return {
        items: []
      };

    default:
      return state;
  }
}
