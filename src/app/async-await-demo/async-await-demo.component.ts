import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-async-await-demo',
  templateUrl: './async-await-demo.component.html',
  styleUrls: ['./async-await-demo.component.css']
})
export class AsyncAwaitDemoComponent implements OnInit {
  userList: Array<any>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.getUserList().then(list => this.userList = list as any[]);
    this.getUserName().then(list => this.userList = list as string[]);

  }

  async getUserList(): Promise<Array<any>> {
    const list: any = await this.userService.getUserList().toPromise();
    const list2: any = await this.userService.getUserList().toPromise();
    return [...list, ...list2];
  }

  async getUserName(): Promise<string | string[]> {
    const result = await Promise.all([this.getUserNameFromDB(), this.getUserNameFromWebSite()]);
    return result;

  }

  // in ASP.NET, async function would return Task<T> or Task, we can catch value for Task<T>.Result. Promise == Task.Run(()=>{...});
  async getUserNameFromDB(): Promise<string> {
    // this line means return new Promise.resolve('first'); in ASP.NET, it will transfer to synchronize function
    const name = await 'first';
    await this.sleep(5000);
    return name;
  }

  async getUserNameFromWebSite(): Promise<string> {
    const name = await 'second';
    await this.sleep(5000);
    return name;
  }


  private sleep(timer): Promise<null> {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve();
      }, timer);
    });
  }

}
