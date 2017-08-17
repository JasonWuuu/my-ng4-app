import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDemoComponent } from './route-demo.component';

describe('RouteDemoComponent', () => {
  let component: RouteDemoComponent;
  let fixture: ComponentFixture<RouteDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
