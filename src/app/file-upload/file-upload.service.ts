import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  baseApiUrl = "http://localhost:9191/users";

  constructor(private http:HttpClient) { }

  upload(file):Observable<any> {

    // Create form data
    const formData = new FormData(); 
        
    // Store form name as "file" with file data
    formData.append("files", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData)
  }
}
