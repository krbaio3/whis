import { Action } from '@ngrx/store';
import { IngresoGasto } from './models/ingreso-gasto.model';

export const SET_ITEMS = '[Ingreso-Gasto] Set Items';
export const UNSET_ITEMS = '[Ingreso-Gasto] Unset Items';

export class SetItemsAction implements Action {
  readonly type = SET_ITEMS;

  constructor(public items: IngresoGasto[]) {}
}

export class UnsetItemsAction implements Action {
  readonly type = UNSET_ITEMS;
}

export type acciones = SetItemsAction | UnsetItemsAction;