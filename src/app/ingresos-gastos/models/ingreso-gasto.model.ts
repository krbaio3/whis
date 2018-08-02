import { Tipo } from './tipo.types';

export class IngresoGasto {
  public descripcion: string;
  public importe: number;
  public tipo: Tipo;
  public uid?: string;

  constructor(ingresoGastoObject: IngresoGastoObject) {
    this.descripcion = (ingresoGastoObject && ingresoGastoObject.descripcion) || null;
    this.importe = (ingresoGastoObject && ingresoGastoObject.importe) || null;
    this.tipo = (ingresoGastoObject && ingresoGastoObject.tipo) || null;
    // this.uid = (ingresoGastoObject && ingresoGastoObject.uid) || null;
  }
}

interface IngresoGastoObject {
  descripcion: string;
  importe: number;
  tipo: Tipo;
  uid?: string;
}
