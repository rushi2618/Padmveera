import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktransferFormComponent } from './stocktransfer-form.component';

describe('StocktransferFormComponent', () => {
  let component: StocktransferFormComponent;
  let fixture: ComponentFixture<StocktransferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocktransferFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocktransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
