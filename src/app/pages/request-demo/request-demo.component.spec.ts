import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDemoComponent } from './request-demo.component';

describe('RequestDemoComponent', () => {
  let component: RequestDemoComponent;
  let fixture: ComponentFixture<RequestDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RequestDemoComponent]
    });
    fixture = TestBed.createComponent(RequestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
