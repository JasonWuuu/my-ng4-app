import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-fork-join-demo',
  templateUrl: './fork-join-demo.component.html',
  styleUrls: ['./fork-join-demo.component.css']
})
export class ForkJoinDemoComponent implements OnInit {
  firstUser: any;
  firstPost: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    const getPostOne$ = Observable.timer(1000).mapTo({ id: 1 });
    const getPostTwo$ = Observable.timer(2000).mapTo({ id: 2 });

    Observable.forkJoin(getPostOne$, getPostTwo$).subscribe(item => {
      console.log(item[0]);
      console.log(item[1]);
    });

    Observable.forkJoin(this.userService.getUserList(), this.userService.getPostList()).subscribe(item => {
      this.firstUser = item[0][0];
      this.firstPost = item[1][0];
    });
  }




}
