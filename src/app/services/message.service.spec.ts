import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserServiceStub {
  getUserList(): Observable<any[]> {
    return Observable.of([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]);
  }
  getName(): string { return 'wucong'; }
}

describe('MessageService', () => {
  let userService: UserService;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers: [MessageService]
      providers: [{ provide: UserService, useClass: UserServiceStub }]
    });
    userService = TestBed.get(UserService);
    messageService = new MessageService(userService);
  });

  // it('should be created', inject([MessageService], (service: MessageService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should have 6 items in getUserList', async () => {
    const userList = await messageService.getUserList().toPromise();
    expect(userList.length).toEqual(6);
    // messageService.getUserList().subscribe(userList => {
    //   expect(userList.length).toEqual(6);
    // });
  });

  it('should have 6 items in getUserList 2',  () => {
    messageService.getUserList().subscribe(userList => {
      expect(userList.length).toEqual(6);
    });
  });
});
