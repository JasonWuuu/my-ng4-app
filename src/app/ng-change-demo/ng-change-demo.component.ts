import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ng-change-demo',
  templateUrl: './ng-change-demo.component.html',
  styleUrls: ['./ng-change-demo.component.css']
})
export class NgChangeDemoComponent implements OnInit {
  name = 'Hello world';
  department = 'Accenture';
  constructor() { }

  ngOnInit() {
  }

  changeName() {
    this.name = 'Hello China' + Math.random() * 10;
  }

  changeDepartment() {
    this.name = 'Hello China' + Math.random() * 10;
    this.department = 'Accenture' + Math.random() * 10;
  }

}

@Component({
  selector: 'app-nested',
  template: `name is :{{name}}, department is :{{department}}`
})
export class NestedComponent implements OnInit, OnChanges {
  @Input() name = 'cong';
  @Input() department = 'CIO';

  ngOnInit() {
    console.log('inited');
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // console.log('changed');
    // console.log('name:' + JSON.stringify(changes['name']));
    // console.log('department:' + JSON.stringify(changes['department']));
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        if (key === 'name') {
          console.log(changes[key]);
        } else if (key === 'department') {
          console.log(changes[key]);
        } else { }
      }
    }


  }
}
