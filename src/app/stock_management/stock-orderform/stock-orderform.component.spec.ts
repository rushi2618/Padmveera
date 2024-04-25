import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOrderformComponent } from './stock-orderform.component';

describe('StockOrderformComponent', () => {
  let component: StockOrderformComponent;
  let fixture: ComponentFixture<StockOrderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockOrderformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockOrderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
