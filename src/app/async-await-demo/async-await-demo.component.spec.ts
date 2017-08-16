import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncAwaitDemoComponent } from './async-await-demo.component';

describe('AsyncAwaitDemoComponent', () => {
  let component: AsyncAwaitDemoComponent;
  let fixture: ComponentFixture<AsyncAwaitDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncAwaitDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncAwaitDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
