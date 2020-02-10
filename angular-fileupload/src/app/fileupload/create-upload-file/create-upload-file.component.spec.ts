import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUploadFileComponent } from './create-upload-file.component';

describe('CreateUploadFileComponent', () => {
  let component: CreateUploadFileComponent;
  let fixture: ComponentFixture<CreateUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUploadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
