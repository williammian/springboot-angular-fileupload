import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUploadFileComponent } from './details-upload-file.component';

describe('DetailsUploadFileComponent', () => {
  let component: DetailsUploadFileComponent;
  let fixture: ComponentFixture<DetailsUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsUploadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
