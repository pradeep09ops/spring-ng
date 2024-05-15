import { UploadFileService } from './../upload-file.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-upload-file',
  standalone:true,
  templateUrl: './list-upload-file.component.html',
  styleUrls: ['./list-upload-file.component.css'],
  imports: [
        CommonModule
    ]
})
export class ListUploadFileComponent implements OnInit {
  clickEventsubscription:Subscription;
  constructor(private uploadFileService: UploadFileService) {
	  this.clickEventsubscription=this.uploadFileService.getClickEvent().subscribe(()=>{
		this.listFiles();
	  });
  }

  files: File[] = [];
  selectedFile : any;
  pdfSrc : string | null = null;

  ngOnInit() {
  }

  listFiles() {
     this.uploadFileService.getFiles().subscribe(data => {this.files = data;});
     console.log(this.files);
  }
  
  onOptionSelected(file: File): void {
    this.selectedFile = file;
    
	  	this.uploadFileService.loadFile(this.selectedFile).subscribe((data) => {
			  /*const fileData = data;
				if (fileData != null && fileData != undefined) {
      				const reader: FileReader = new FileReader();
		      		reader.onload = (e: any) => {
		        		this.pdfSrc = e.target.result;
		      		};
      			reader.readAsDataURL(fileData);
	  			}*/
	  			console.log(data);
	  	});
	    console.log(this.selectedFile);
  }
}
