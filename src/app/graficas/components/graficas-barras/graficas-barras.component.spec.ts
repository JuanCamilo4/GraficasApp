import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasBarrasComponent } from './graficas-barras.component';

describe('GraficasBarrasComponent', () => {
  let component: GraficasBarrasComponent;
  let fixture: ComponentFixture<GraficasBarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficasBarrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
