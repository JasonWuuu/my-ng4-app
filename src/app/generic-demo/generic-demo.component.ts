import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
}
interface Student extends User {
  className: string;
}

interface Employee extends User {
  departmentName: string;
}

class PeopleManager<T>{
  private people: T;
  constructor(t: T) {
    this.people = t;
  }
  getPeople() {
    return new Promise<T>((resolve, reject) => {
      resolve(this.people);
    });
  }

  getName<K>() {
    return this.people['id'] as K;
  }

}


@Component({
  selector: 'app-generic-demo',
  templateUrl: './generic-demo.component.html',
  styleUrls: ['./generic-demo.component.css']
})
export class GenericDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const manager: PeopleManager<User> = new PeopleManager<User>({ id: 1, name: '33' });
    const user = manager.getPeople();
    const name = manager.getName<string>();
    console.log(typeof name);
  }
}

