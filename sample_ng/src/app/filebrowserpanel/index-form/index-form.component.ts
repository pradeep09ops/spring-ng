import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IndexFile } from '../../indexfile';
import { Router } from '@angular/router';
import { MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-index-form',
  standalone:true,
  templateUrl: './index-form.component.html',
  styleUrls: ['./index-form.component.css'],
  imports: [
        CommonModule, FormsModule, MatDialogContent, MatDialogActions, MatFormFieldModule, 
        MatDialogClose, MatInputModule, RouterOutlet
    ]
})
export class IndexFormComponent implements OnInit {
	
	indexFile: IndexFile = new IndexFile();
  
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router) {}


  ngOnInit(): void {
  }

  onSubmit(){
	 // this.router.navigate(['/app-index-form-with-values'], { state: { formData: this.indexFile } });
	  this.router.navigate(['/app-index-form-with-values', { state: { formData: this.indexFile } }])
        .then(() => {
          window.location.reload();
        });
  }
}
