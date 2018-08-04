import { IngresosGastosModule } from './ingresos-gastos.module';

describe('IngresosGastosModule', () => {
  let ingresosGastosModule: IngresosGastosModule;

  beforeEach(() => {
    ingresosGastosModule = new IngresosGastosModule();
  });

  it('should create an instance', () => {
    expect(ingresosGastosModule).toBeTruthy();
  });
});
