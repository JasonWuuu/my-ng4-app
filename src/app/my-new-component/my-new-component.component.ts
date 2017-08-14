import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  fruids: string[] = ['a', 'b', 'c'];
  foods: string[] = [...this.fruids, 'd'];

  constructor(private messageService: MessageService) { }

  auth: any;
  ngOnInit() {
    this.auth = Observable
      .of({ username: 'semlinker', password: 'segmentfault' })
      .delay(new Date(Date.now() + 2000));
  }
  sendMessage() {
    this.messageService.sendMessage('this is congcong');
  }

  clearMessage() {
    this.messageService.clearMessage();
    this.ngOnInit();
  }

  createMessage() {
    return null;
  }


}
