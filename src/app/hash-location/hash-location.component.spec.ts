import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashLocationComponent } from './hash-location.component';

describe('HashLocationComponent', () => {
  let component: HashLocationComponent;
  let fixture: ComponentFixture<HashLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
