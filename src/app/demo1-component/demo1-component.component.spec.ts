import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1ComponentComponent } from './demo1-component.component';

describe('Demo1ComponentComponent', () => {
  let component: Demo1ComponentComponent;
  let fixture: ComponentFixture<Demo1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
