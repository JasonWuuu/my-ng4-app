import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChangeDemoComponent } from './ng-change-demo.component';

describe('NgChangeDemoComponent', () => {
  let component: NgChangeDemoComponent;
  let fixture: ComponentFixture<NgChangeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgChangeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgChangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
