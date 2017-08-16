import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuple-demo',
  templateUrl: './tuple-demo.component.html',
  styleUrls: ['./tuple-demo.component.css']
})
export class TupleDemoComponent implements OnInit {

  result: [number, string];
  constructor() { }

  ngOnInit() {
    this.result = this.showIdAndName();
  }

  showIdAndName(): [number, string] {
    return [2, 'wucong'];
  }
}
