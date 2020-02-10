import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-upload-file',
  templateUrl: './details-upload-file.component.html',
  styleUrls: ['./details-upload-file.component.css']
})
export class DetailsUploadFileComponent implements OnInit {
  @Input()
  fileUpload: string;

  constructor() {}

  ngOnInit() {}
}
