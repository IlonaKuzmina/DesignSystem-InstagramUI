import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerContentLeftComponent } from './messenger-content-left.component';

describe('MessengerContentLeftComponent', () => {
  let component: MessengerContentLeftComponent;
  let fixture: ComponentFixture<MessengerContentLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerContentLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessengerContentLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
