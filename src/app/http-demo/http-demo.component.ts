import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: { street: string, zipcode: string };
}

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {
  userList: IUser[];
  constructor(private http: Http) { }

  ngOnInit() {
    this.getUserList().subscribe(list => {
      this.userList = list;
      console.log(this.userList);
    }
    );
  }

  public getUserList(): Observable<IUser[]> {
    return this.http.get('http://jsonplaceholder.typicode.com/users').toJSON<IUser[]>();
  }
}
