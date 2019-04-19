import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrandComponent } from './add-prand.component';

describe('AddPrandComponent', () => {
  let component: AddPrandComponent;
  let fixture: ComponentFixture<AddPrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
