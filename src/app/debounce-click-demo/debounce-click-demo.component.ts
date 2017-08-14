import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debounce-click-demo',
  templateUrl: './debounce-click-demo.component.html',
  styleUrls: ['./debounce-click-demo.component.css']
})
export class DebounceClickDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show(event: MouseEvent) {
    console.log(event);
  }
}
