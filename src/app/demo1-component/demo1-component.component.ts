
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1-component',
  templateUrl: './demo1-component.component.html',
  styleUrls: ['./demo1-component.component.css']
})
export class Demo1ComponentComponent implements OnInit {

  isShow = false;
  msg = 'Hello World';
  userList = ['a', 'b', 'c'];
  currentDate = new Date();

  constructor() {

  }

  submit() {
    console.log(Math.random());
  }

  ngOnInit() {
    // let subject=new Subject();
    // let obsever1=new Observer('observer1');
    // let obsever2=new Observer('observer2');

    // subject.addObserver(obsever1);
    // subject.addObserver(obsever2);

    // subject.notifyObservers();
  }

}

// class Observer {
//   name: string = '';
//   constructor(name: string) {
//     this.name = name;
//   }
//   notify() {
//     console.log(`${this.name} has been notified.`);
//   }

// }


// class Subject {
//   observerCollection: Observer[] = [];

//   constructor() {
//     this.observerCollection = [];
//   }

//   addObserver(obsever:Observer) {
//     this.observerCollection.push(obsever);
//   }

//   deleteObserver(obsever:Observer){
//     let index=this.observerCollection.indexOf(obsever);
//     this.observerCollection.splice(index,1);
//   }

//   notifyObservers(){

//     this.observerCollection.forEach(o=>{
//       o.notify();
//     });
//   }
// }


