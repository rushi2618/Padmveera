import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesReportComponent } from './stages-report.component';

describe('StagesReportComponent', () => {
  let component: StagesReportComponent;
  let fixture: ComponentFixture<StagesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagesReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
