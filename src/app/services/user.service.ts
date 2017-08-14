import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getUserList() {
    return this.httpClient.get('http://jsonplaceholder.typicode.com/users');
  }

  public getPostList() {
    return Observable.timer(5000).mergeMap(() => this.httpClient.get('http://jsonplaceholder.typicode.com/posts'));
  }
}
