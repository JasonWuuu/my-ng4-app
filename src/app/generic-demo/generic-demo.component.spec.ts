import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDemoComponent } from './generic-demo.component';

describe('GenericDemoComponent', () => {
  let component: GenericDemoComponent;
  let fixture: ComponentFixture<GenericDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
