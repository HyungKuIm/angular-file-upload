import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  files: File[] = null; // Variable to store file

  users: any = [];

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.files = event.target.files;
  }

  onUpload() {
    this.loading = !this.loading;
        console.log(this.files);
        this.fileUploadService.upload(this.files).subscribe(
            (event: any) => {
                console.log(event);
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    //this.shortLink = event.link;
                    this.shortLink = "업로드 성공!";
                    this.users = event;
                    this.loading = false; // Flag variable 
                }
            }
        );
  }

}
