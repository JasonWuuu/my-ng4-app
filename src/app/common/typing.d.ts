import { Observable } from 'rxjs/Observable';
export declare function toJSON<T>(): Observable<T>;

declare module "rxjs/Observable" {
  interface Observable<T> {
    toJSON : typeof toJSON;
  }
}
