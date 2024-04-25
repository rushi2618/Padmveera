import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinwardformComponent } from './stockinwardform.component';

describe('StockinwardformComponent', () => {
  let component: StockinwardformComponent;
  let fixture: ComponentFixture<StockinwardformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockinwardformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockinwardformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
