import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOrderlistComponent } from './stock-orderlist.component';

describe('StockOrderlistComponent', () => {
  let component: StockOrderlistComponent;
  let fixture: ComponentFixture<StockOrderlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockOrderlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockOrderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
