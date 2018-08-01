import { Pipe, PipeTransform } from '@angular/core';
import { IngresoGasto } from './models/ingreso-gasto.model';

@Pipe({
  name: 'ordenIngresoGasto'
})
export class OrdenIngresoGastoPipe implements PipeTransform {
  transform(item: IngresoGasto[]): IngresoGasto[] {
    return item.sort((a, b) => {
      if (a.tipo === 'Ingreso') {
        return -1;
      } else {
        return 1;
      }
    });
  }
}
