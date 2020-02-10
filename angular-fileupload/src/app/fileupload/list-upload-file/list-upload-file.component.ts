import { UploadFileService } from './../upload-file.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-upload-file',
  templateUrl: './list-upload-file.component.html',
  styleUrls: ['./list-upload-file.component.css']
})
export class ListUploadFileComponent implements OnInit {
  constructor(private uploadFileService: UploadFileService) {}

  fileShow = false;
  fileUploads: Observable<string[]>;

  ngOnInit() {}

  listFiles(show: boolean) {
    this.fileShow = show;
    if (show) {
      this.fileUploads = this.uploadFileService.getFiles();
      console.log(this.fileUploads);
    }
  }
}
