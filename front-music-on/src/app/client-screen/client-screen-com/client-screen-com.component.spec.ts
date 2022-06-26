import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientScreenComComponent } from './client-screen-com.component';

describe('ClientScreenComComponent', () => {
  let component: ClientScreenComComponent;
  let fixture: ComponentFixture<ClientScreenComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientScreenComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientScreenComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
