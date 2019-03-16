import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandBComponent } from './rand-b.component';

describe('RandBComponent', () => {
  let component: RandBComponent;
  let fixture: ComponentFixture<RandBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
