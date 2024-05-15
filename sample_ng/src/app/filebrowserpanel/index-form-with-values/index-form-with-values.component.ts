import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IndexFileService } from '../index-file-service';
import { IndexFile } from '../../indexfile';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index-form-with-values',
  standalone:true,
  templateUrl: './index-form-with-values.component.html',
  styleUrls: ['./index-form-with-values.component.css'],
  imports: [
        CommonModule, FormsModule
    ]
})
export class IndexFormWithValuesComponent implements OnInit {

	indexFile: any; //= {field1:'', field2:'',field3:'', field4:'',field5:'', field6:'',field7:'', field8:'',
							//field1Value:'', field2Value:'',field3Value:'', field4Value:'',field5Value:'', field6Value:'',field7Value:'', field8Value:''};
  constructor(private indexFileService: IndexFileService, private route: ActivatedRoute, private router: Router) {
    this.indexFile = this.route.snapshot.params;
    route.params.subscribe(val => {
     this.indexFile = this.route.snapshot.params;
   });
    }

  ngOnInit(): void {
	  /*this.route.queryParams.subscribe(params => {
	    const formData = params['formData'];
    	console.log(formData);
  		});*/
  		this.indexFile = history.state.data;
  }

  onSubmit(indexFile: IndexFile){
	  
    this.indexFileService.saveFileIndex(indexFile).subscribe( data =>{
      	console.log("Data saved successfully!!");
    }, error => console.log(error));
  }
}
