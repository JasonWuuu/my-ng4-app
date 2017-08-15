import { Observable } from 'rxjs/Observable';

function toJSON<T>(): Observable<T> {
  return this.map((response: Response) => response.json());
}

Observable.prototype.toJSON = toJSON;
