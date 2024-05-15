import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpEvent, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { IndexFormComponent } from './index-form/index-form.component';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root',
})
export class UploadFileService {

  private subject = new Subject<any>();
  constructor(private http: HttpClient, private dialog: MatDialog) {}
  
  fileSelected: any;

//Called from Component 1
  uploadFiles(file: File[]): void {
    const formData: FormData = new FormData();
    for(var f of file) {
	    formData.append('file', f);
	}
    const request = new HttpRequest('POST', '/upload/copyFiles', formData, {
      reportProgress: true,
      responseType: 'text'
    });
    this.http.request(request).subscribe(event=> {
		if (event.type === HttpEventType.UploadProgress) {
        	console.log('In Progress');
      	} else if (event instanceof HttpResponse) {
			this.subject.next(file);
        	console.log('File uploaded successfully');
      	}
    });
  }
  
  //Registered to component1 event
  	getClickEvent(): Observable<any>{ 
  		return this.subject.asObservable();
	}

  //Called when component2 will be rendered
  getFiles(): Observable<any> {
    return this.http.get('/upload/getFiles');
  }
  
  getSelectEvent(): Observable<any>{ 
  		return this.subject.asObservable();
	}

getSelectedFile(): String{ 
  		return this.fileSelected;
	}
  
  /*setSelectedFile(file: File): void {
	  this.fileSelected = file;
	  //this.subject.next(file);
  }*/
  
  loadFile(fileName: String): Observable<any> {
	  return this.http.get('/upload/loadFile/'+fileName);
  }
  
  openDialog() : void {
	  const dialogRef = this.dialog.open(IndexFormComponent, {
		  width: '500px',
		  data:{}
	  });
	  dialogRef.afterClosed().subscribe((result) => {
		  console.log(result);
	  });
  }
}
