import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockconsumeListComponent } from './stockconsume-list.component';

describe('StockconsumeListComponent', () => {
  let component: StockconsumeListComponent;
  let fixture: ComponentFixture<StockconsumeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockconsumeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockconsumeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
