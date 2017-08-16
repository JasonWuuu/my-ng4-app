import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendObjDemoComponent } from './extend-obj-demo.component';

describe('ExtendObjDemoComponent', () => {
  let component: ExtendObjDemoComponent;
  let fixture: ComponentFixture<ExtendObjDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendObjDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendObjDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
