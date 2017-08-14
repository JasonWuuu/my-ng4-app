import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-client-demo',
  templateUrl: './http-client-demo.component.html',
  styleUrls: ['./http-client-demo.component.css']
})
export class HttpClientDemoComponent implements OnInit {
  list: Array<any> = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://jsonplaceholder.typicode.com/posts').subscribe(list => {
      console.log(list);
      this.list = list as Array<Object>;
    });
  }

}
