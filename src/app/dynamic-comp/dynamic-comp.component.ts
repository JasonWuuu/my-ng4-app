import {
  Component, OnInit, ComponentFactory,
  ComponentFactoryResolver, ComponentRef, ViewContainerRef
} from '@angular/core';

// @Component({
//   selector: 'app-exe-alert',
//   template: ``
// })
// export class AlertComponent implements OnInit {

//   constructor() {

//   }

//   ngOnInit() {

//   }

// }

// @Component({
//   selector: 'app-exe-div',
//   template: ``
// })
// export class DivComponent implements OnInit {

//   constructor() {

//   }

//   ngOnInit() {

//   }

// }

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.css']
})
export class DynamicCompComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {

  }

}



