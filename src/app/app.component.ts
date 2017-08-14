import { Component, OnDestroy } from '@angular/core';
import { MessageService } from './services/message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'ng4 app';
  message: any;
  // subscription: Subscription;
  constructor(private messageService: MessageService) {
    // this.subscription = this.messageService.getMessage().subscribe(message => {
    //   this.message = message;
    // });

  }

  ngOnDestroy() {

    // this.subscription.unsubscribe();

  }




}
