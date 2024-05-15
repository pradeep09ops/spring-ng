import { Component, OnInit, Input } from '@angular/core';
import { UploadFileService } from './../upload-file.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { SafePipe } from './pipe-component';
import { MatDialog } from '@angular/material/dialog';

declare var pdfjsLib: any;

@Component({
  selector: 'app-load-file-panel',
  templateUrl: './load-file-panel.component.html',
  styleUrls: ['./load-file-panel.component.css'],
  standalone:true,
  imports: [
        CommonModule, SafePipe, RouterOutlet
    ]
})
export class LoadFilePanelComponent implements OnInit {
	
	//selectEventsubscription:Subscription;
	url: any = '';
	
	@Input()
	pdfSrc: string | null = null;
	
  	constructor(private uploadFileService: UploadFileService, private dialog: MatDialog) {
  }	
  
  @Input()
  fileSelected: string | null = null;
  
  ngOnInit() {
	  this.loadPdfFile('http://localhost:8082/upload/loadFile/pet_ct.pdf')
  }
  
  
  
 loadPdfFile(url: string) {
	 const pdfUrl = url; // Replace with your PDF file URL
    const pdfViewer = document.getElementById('pdfContent')!;
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc:any) {
      const numPages = pdfDoc.numPages;
      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        pdfDoc.getPage(pageNum).then(function(page:any) {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d')!;
          const viewport = page.getViewport({ scale: 1 });
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          page.render({ canvasContext: context, viewport: viewport }).promise.then(function() {
          	pdfViewer.appendChild(canvas);
          });
        });
      }
    });
}
  
  openDialog():void {
	  this.uploadFileService.openDialog();
  }
}
