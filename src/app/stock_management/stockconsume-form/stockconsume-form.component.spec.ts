import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockconsumeFormComponent } from './stockconsume-form.component';

describe('StockconsumeFormComponent', () => {
  let component: StockconsumeFormComponent;
  let fixture: ComponentFixture<StockconsumeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockconsumeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockconsumeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
