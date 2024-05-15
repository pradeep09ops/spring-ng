import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IndexFile } from './../indexfile';


@Injectable({
  providedIn: 'root'
})
export class IndexFileService {

  constructor(private httpClient: HttpClient) { }
  
  saveFileIndex(index: IndexFile): Observable<Object>{
    return this.httpClient.post('/api/saveIndex', index);
  }

}