import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TupleDemoComponent } from './tuple-demo.component';

describe('TupleDemoComponent', () => {
  let component: TupleDemoComponent;
  let fixture: ComponentFixture<TupleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TupleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TupleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
