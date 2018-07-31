import * as fromIngresoGasto from './ingreso-gasto.action';
import { IngresoGasto } from './models/ingreso-gasto.model';

export interface IngresoGastoState {
  items: IngresoGasto[];
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
