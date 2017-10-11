import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { UserService } from './user.service';


@Injectable()
export class MessageService {
  private subject = new Subject<any>();

  constructor(private userService: UserService) {

  }

  get myUserService() {
    return this.userService;
  }

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getUserList(): Observable<Array<any>> {
    return this.userService.getUserList();
  }
}

