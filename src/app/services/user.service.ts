import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  /* 什么情况下用Observabel，什么情况下用Promise
    1. 当返回的数据只需要用一次的时候，尽量用Promise，比如：从API中获取值
    2. 当需要多次用到返回值的时候，用Observable, 比如：本系统message的功能，需要在页面间多次传递。 注：用完subscription后，记得unsubscribe.
  */
  public getUserList(): Observable<Array<any>> {
    return this.httpClient.get('http://jsonplaceholder.typicode.com/users') as Observable<Array<any>>;
  }

  public getPostList() {
    return Observable.timer(5000).mergeMap(() => this.httpClient.get('http://jsonplaceholder.typicode.com/posts'));
  }

  public getUserListSnapShot() {
    return this.getUserList().toPromise(); // we'd better to return promise to retrieve data for api
  }
}



class Foo {
  public bar(s: string): number;
  public bar(n: number): string;
  public bar(arg: any): any {
    if (typeof arg === 'number') {
      return arg.toString();
    }

    if (typeof (arg) === 'string') {
      return arg.length;
    }
  }

}
