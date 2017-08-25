import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectDemoComponent } from './inject-demo.component';

describe('InjectDemoComponent', () => {
  let component: InjectDemoComponent;
  let fixture: ComponentFixture<InjectDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
