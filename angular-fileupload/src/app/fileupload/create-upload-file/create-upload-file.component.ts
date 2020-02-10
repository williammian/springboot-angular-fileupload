import { UploadFileService } from './../upload-file.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-create-upload-file',
  templateUrl: './create-upload-file.component.html',
  styleUrls: ['./create-upload-file.component.css']
})
export class CreateUploadFileComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;

  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadFileService: UploadFileService) {}

  ngOnInit() {}

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
    this.progress.percentage = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.uploadFileService.uploadFiles(this.currentFile).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(
          (100 * event.loaded) / event.total
        );
      } else if (event instanceof HttpResponse) {
        console.log('File uploaded successfully');
      }
    });
    this.selectedFiles = undefined;
  }
}
