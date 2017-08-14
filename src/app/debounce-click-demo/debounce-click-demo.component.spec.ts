import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceClickDemoComponent } from './debounce-click-demo.component';

describe('DebounceClickDemoComponent', () => {
  let component: DebounceClickDemoComponent;
  let fixture: ComponentFixture<DebounceClickDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebounceClickDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceClickDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
