import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosGastosComponent } from './ingresos-gastos.component';

describe('IngresosGastosComponent', () => {
  let component: IngresosGastosComponent;
  let fixture: ComponentFixture<IngresosGastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresosGastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
