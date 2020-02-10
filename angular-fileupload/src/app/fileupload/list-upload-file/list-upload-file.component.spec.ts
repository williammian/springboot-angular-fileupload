import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUploadFileComponent } from './list-upload-file.component';

describe('ListUploadFileComponent', () => {
  let component: ListUploadFileComponent;
  let fixture: ComponentFixture<ListUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUploadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
