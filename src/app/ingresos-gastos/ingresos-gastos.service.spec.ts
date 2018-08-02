import { TestBed, inject } from '@angular/core/testing';

import { IngresosGastosService } from './ingresos-gastos.service';

describe('IngresosGastosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngresosGastosService]
    });
  });

  it('should be created', inject([IngresosGastosService], (service: IngresosGastosService) => {
    expect(service).toBeTruthy();
  }));
});
