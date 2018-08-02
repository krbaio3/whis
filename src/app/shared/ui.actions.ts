import { Action } from '@ngrx/store';

export const ACTIVAR_LOADING = '[UI Loading] Cargando';
export const DESACTIVAR_LOADING = '[UI Loading] Fin de carga';
export const ACTIVAR_SIDEBAR = '[UI SideBar] Mostrar SideBar';
export const DESACTIVAR_SIDEBAR = '[UI SideBar] Ocultar SideBar';

export class ActivarLoadingAction implements Action {
  readonly type = ACTIVAR_LOADING;
}

export class DesactivarLoadingAction implements Action {
  readonly type = DESACTIVAR_LOADING;
}

export class ActivarSideBarAction implements Action {
  readonly type = ACTIVAR_SIDEBAR;
}

export class DesactivarSideBarAction implements Action {
  readonly type = DESACTIVAR_SIDEBAR;
}

export type acciones =
  | ActivarLoadingAction
  | DesactivarLoadingAction
  | ActivarSideBarAction
  | DesactivarSideBarAction;
