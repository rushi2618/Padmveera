import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinwardlistComponent } from './stockinwardlist.component';

describe('StockinwardlistComponent', () => {
  let component: StockinwardlistComponent;
  let fixture: ComponentFixture<StockinwardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockinwardlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockinwardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
