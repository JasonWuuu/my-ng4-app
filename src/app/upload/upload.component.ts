import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }

  fileChangeEvent(fileInput: any) {
    console.log(fileInput);
    const fileArray = <Array<File>>fileInput.target.files;
    const req = new HttpRequest('POST', 'https://mockupr.com/go',
      fileArray[0], { reportProgress: true });

    this.httpClient.request(req).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log(Math.round(100 * event.loaded / event.total));
      } else if (event.type === HttpEventType.Response) {
        console.log('upload completed');
      }
    });

    // const f = new FormData();
    // f.append('id', 'abc');
    // f.append('file', fileArray[0], 'myfileName');
    // const r = new HttpRequest('POST', '', f, { reportProgress: true });
  }

}
