import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotResellMComponent } from './plot-resell-m.component';

describe('PlotResellMComponent', () => {
  let component: PlotResellMComponent;
  let fixture: ComponentFixture<PlotResellMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotResellMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotResellMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
