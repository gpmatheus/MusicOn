import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayableDisplayComponent } from './playable-display.component';

describe('PlayableDisplayComponent', () => {
  let component: PlayableDisplayComponent;
  let fixture: ComponentFixture<PlayableDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayableDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayableDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
