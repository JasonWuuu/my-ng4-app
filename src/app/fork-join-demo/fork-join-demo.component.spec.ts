import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkJoinDemoComponent } from './fork-join-demo.component';

describe('ForkJoinDemoComponent', () => {
  let component: ForkJoinDemoComponent;
  let fixture: ComponentFixture<ForkJoinDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForkJoinDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkJoinDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
