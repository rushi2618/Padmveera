import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientIcomeComponent } from './client-icome.component';

describe('ClientIcomeComponent', () => {
  let component: ClientIcomeComponent;
  let fixture: ComponentFixture<ClientIcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientIcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientIcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
