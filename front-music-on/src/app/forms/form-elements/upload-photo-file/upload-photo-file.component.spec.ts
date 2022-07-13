import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPhotoFileComponent } from './upload-photo-file.component';

describe('UploadPhotoFileComponent', () => {
  let component: UploadPhotoFileComponent;
  let fixture: ComponentFixture<UploadPhotoFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPhotoFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPhotoFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
