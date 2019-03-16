import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagComponent } from './messag.component';

describe('MessagComponent', () => {
  let component: MessagComponent;
  let fixture: ComponentFixture<MessagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
