import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateUploadFileComponent } from './fileupload/create-upload-file/create-upload-file.component';
import { ListUploadFileComponent } from './fileupload/list-upload-file/list-upload-file.component';
import { DetailsUploadFileComponent } from './fileupload/details-upload-file/details-upload-file.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateUploadFileComponent,
    ListUploadFileComponent,
    DetailsUploadFileComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
