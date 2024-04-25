import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotReselllistComponent } from './plot-reselllist.component';

describe('PlotReselllistComponent', () => {
  let component: PlotReselllistComponent;
  let fixture: ComponentFixture<PlotReselllistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotReselllistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotReselllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
