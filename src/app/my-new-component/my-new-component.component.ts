import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import{Observable} from 'Rxjs';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  auth:any;
  ngOnInit() {
     this.auth = Observable
      .of({ username: 'semlinker', password: 'segmentfault' })
      .delay(new Date(Date.now() + 2000));
  }
sendMessage(){
  this.messageService.sendMessage("this is congcong");
}

clearMessage(){
  this.messageService.clearMessage();
}

}
