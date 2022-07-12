import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReelsComponent } from './user-reels.component';

describe('UserReelsComponent', () => {
  let component: UserReelsComponent;
  let fixture: ComponentFixture<UserReelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
