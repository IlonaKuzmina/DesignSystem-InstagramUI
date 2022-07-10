import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerContentRightComponent } from './messenger-content-right.component';

describe('MessengerContentRightComponent', () => {
  let component: MessengerContentRightComponent;
  let fixture: ComponentFixture<MessengerContentRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerContentRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessengerContentRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
