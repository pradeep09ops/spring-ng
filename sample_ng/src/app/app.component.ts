import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CreateFileBrowserComponent } from './filebrowserpanel/create-file-browser/create-file-browser.component';
import { ListUploadFileComponent } from './filebrowserpanel/list-upload-file/list-upload-file.component';
import { LoadFilePanelComponent } from './filebrowserpanel/load-file-panel/load-file-panel.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ CreateFileBrowserComponent,
  ListUploadFileComponent, LoadFilePanelComponent,
  HttpClientModule, CommonModule, RouterOutlet, MatDialogModule ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample_ng';
}
