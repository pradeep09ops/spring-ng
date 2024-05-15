import { UploadFileService } from './../upload-file.service';
import { Component, OnInit } from '@angular/core';
import { ListUploadFileComponent } from '../list-upload-file/list-upload-file.component';

@Component({
  selector: 'app-create-file-browser',
  templateUrl: './create-file-browser.component.html',
  styleUrls: ['./create-file-browser.component.css'],
  standalone:true,
  imports:[ ListUploadFileComponent ]
})
export class CreateFileBrowserComponent implements OnInit {
  selectedFiles: any;
  currentFile: any;

  constructor(private uploadFileService: UploadFileService) {}

  ngOnInit() {
	  this.currentFile = File;
	  this.selectedFiles = FileList;
  }

  selectFile(event: Event) {
    this.selectedFiles = (event.target as HTMLInputElement).files;
    this.uploadFile();
  }

  uploadFile() {
	  console.log(this.selectedFiles);
    this.uploadFileService.uploadFiles(this.selectedFiles);
    this.selectedFiles = undefined;
  }
}
