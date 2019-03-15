import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedPicturesComponent } from './blocked-pictures.component';

describe('BlockedPicturesComponent', () => {
  let component: BlockedPicturesComponent;
  let fixture: ComponentFixture<BlockedPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
