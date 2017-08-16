import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extend-obj-demo',
  templateUrl: './extend-obj-demo.component.html',
  styleUrls: ['./extend-obj-demo.component.css']
})
export class ExtendObjDemoComponent implements OnInit {
  result: any;
  constructor() { }

  ngOnInit() {
    const first = { id: 1, name: 'wucong' };
    const second = { ...first, gender: 'male' };
    // const { id, gender } = second;
    const { id, ...rest } = second;

    this.result = rest;
  }

}
