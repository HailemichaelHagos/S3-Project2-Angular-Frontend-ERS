import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ErsUploadFile } from '../upload-file-model';
import { UplooadFileHttpServiceService } from '../uplooad-file-http-service.service';

@Component({
  selector: 'app-uplooad-file',
  templateUrl: './uplooad-file.component.html',
  styleUrls: ['./uplooad-file.component.css']
})
export class UplooadFileComponent implements OnInit {

 allFiles: ErsUploadFile[] = [];
  toggleAdd: boolean = false;

  newFile: ErsUploadFile = {

  reimbursementId: 0,
  requestingEmployeeId: 0,
  file: "",
  tphoto: ""
  
  }

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  constructor(private uploadService: UplooadFileHttpServiceService) { }
  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          }
        });
      }
      this.selectedFiles = undefined;
    }
  }
}
